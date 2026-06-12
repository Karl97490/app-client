import "../styles/BreadsList.css";
import "../styles/Cards.css";
import { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import { Search } from "../components/Search";
import { Filter } from "../components/Filter";
import { Sort } from "../components/Sort";
import { LoadingPage } from "./LoadingPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const BreadsList = () => {
  const [breads, setBreads] = useState([]);
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
    let url = "/breads?";
    const params = [];
    try {
      if (querySearch) {
        params.push(`name_like=${querySearch}`);
      }
      // if (queryFilter) {
      //   params.push(`ingredients.${queryFilter}_ne=null`);
      // }
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
        setBreads(response.data);
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

  if (isLoading) {
    return <LoadingPage />;
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
        {/* <Filter query={queryFilter} onChange={handleChange} /> */}
      </fieldset>
      <section className="mx-5 rounded-4xl border-4 grid grid-cols-[repeat(auto-fit,24rem)] gap-y-4 gap-x-10 justify-center py-10 bg-base-100">
        {breads.map((bread) => {
          return <Cards key={bread.id} obj={bread} />;
        })}
      </section>
    </div>
  );
};
