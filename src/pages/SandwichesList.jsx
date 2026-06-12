// import "../styles/SandwichesList.css";
// import "../styles/FormsAction.css";

import { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import { useNavigate } from "react-router-dom";
import { Search } from "../components/Search";
import { Filter } from "../components/Filter";
import { Sort } from "../components/Sort";
import { NavLink } from "react-router-dom";
import { LoadingPage } from "./LoadingPage";
import axios from "axios";

export const SandwichesList = () => {
  const [sandwiches, setSandwiches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [querySearch, setQuerySearch] = useState("");
  const [queryFilter, setQueryFilter] = useState("");
  const [querySort, setQuerySort] = useState("");

  // Check for multiple rendering component
  // console.log(querySort);
  // console.log(queryFilter);
  // console.log(querySort);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [querySearch, queryFilter, querySort]);

  const getData = async () => {
    let url = "/sandwiches?";
    const params = [];
    try {
      if (querySearch) {
        params.push(`name_like=${querySearch}`);
      }
      if (queryFilter) {
        params.push(`ingredients.${queryFilter}_ne=null`);
      }
      if (querySort) {
        params.push(`_sort=${querySort}`);
      }
      url += params.join("&");
      let response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}${url}`,
      );
      // console.log(response.data);
      setIsLoading(false);
      if (response.data.length) {
        setSandwiches(response.data);
      }
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    // console.log(name, value);
    if (name === "filter") {
      setQueryFilter(value);
    } else if (name === "search") {
      setQuerySearch(value);
    } else {
      setQuerySort(value);
    }
  };

  const handleReset = () => {
    setQueryFilter("");
    setQuerySearch("");
    setQuerySort("");
  };

  const handleDelete = async (sandwicheId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches/${sandwicheId}`,
      );
      // console.log(response);
      setIsLoading(false);
      getData();
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  if (isLoading) {
    return <LoadingPage page="list" />;
  }

  return (
    <div className="w-full pb-10">
      <fieldset className="fieldset flex flex-row justify-center w-[95%] m-auto p-4">
        <button
          type="reset"
          className="btn btn-ghost bg-base-100"
          onClick={handleReset}
        >
          Reset
        </button>
        <Search query={querySearch} onChange={handleChange} />
        <Sort query={querySort} onChange={handleChange} />
        <Filter query={queryFilter} onChange={handleChange} />
      </fieldset>

      <section className="max-w-[95%] md:max-w-[85%] lg:max-w-[90%] m-auto rounded-4xl border-2 grid grid-cols-[repeat(auto-fit,24rem)] gap-y-4 gap-x-10 justify-evenly py-10 px-1 bg-base-100">
        {/* <NavLink to="add">
          <button id="add-btn">Create your own</button>
        </NavLink> */}
        {sandwiches.map((sandwich) => {
          return (
            <Cards key={sandwich.id} obj={sandwich} onDelete={handleDelete} />
          );
        })}
      </section>
    </div>
  );
};
