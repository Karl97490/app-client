import "../styles/SandwichesList.css";
import "../styles/FormsAction.css";
import "../styles/Cards.css";
import { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import { useNavigate } from "react-router-dom";
import { Search } from "../components/Search";
import { Filter } from "../components/Filter";
import { Sort } from "../components/Sort";
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
    return <h2>Sorry the page is loading...</h2>;
  }

  return (
    <div className="sandwiches-page">
      <h2>This is SandwichesList component...</h2>
      <div className="inputs-container">
        <button type="reset" id="reset-btn" onClick={handleReset}>
          Reset
        </button>
        <Search query={querySearch} onChange={handleChange} />
        <Sort query={querySort} onChange={handleChange} />
        <Filter query={queryFilter} onChange={handleChange} />
      </div>
      <section className="cards-container">
        {sandwiches.map((sandwich) => {
          return (
            <Cards key={sandwich.id} obj={sandwich} onDelete={handleDelete} />
          );
        })}
      </section>
    </div>
  );
};
