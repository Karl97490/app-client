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

      if (querySort) {
        params.push(`_sort=${querySort}`);
      }
      url += params.join("&");
      let response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}${url}`,
      );
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
    return <LoadingPage page="list" />;
  }

  return (
    <div className="w-full bg-base-200 pb-10">
      <div className="max-w-[95%] md:max-w-[85%] lg:max-w-[90%] mx-auto pt-8 pb-4">
        <h1 className="text-4xl font-bold">Bread Library</h1>

        <p className="text-base-content/60 mt-2">
          Explore breads used in sandwiches from around the world.
        </p>
      </div>

      <fieldset
        className="
      fieldset
      flex
      flex-wrap
      justify-center
      items-center
      gap-3
      w-[95%]
      md:w-[85%]
      lg:w-[90%]
      mx-auto
      p-5
      bg-base-100
      border
      border-base-300
      rounded-3xl
      shadow-lg
    "
      >
        <button
          type="reset"
          className="btn btn-outline btn-primary"
          onClick={handleReset}
        >
          Reset
        </button>

        <Search query={querySearch} onChange={handleChange} />

        <Sort query={querySort} onChange={handleChange} />
      </fieldset>

      <div className="divider max-w-[90%] mx-auto my-8">Results</div>

      <div className="max-w-[95%] md:max-w-[85%] lg:max-w-[90%] mx-auto mb-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <h2 className="text-xl font-semibold">Bread Collection</h2>

          <div className="badge badge-primary badge-lg">
            {breads.length} breads
          </div>
        </div>
      </div>

      <section
        className="
      max-w-[95%]
      md:max-w-[85%]
      lg:max-w-[90%]
      mx-auto

      grid
      grid-cols-[repeat(auto-fit,24rem)]
      justify-evenly

      gap-y-8
      gap-x-10

      p-8

      bg-base-100
      border
      border-base-300
      rounded-3xl
      shadow-xl
    "
      >
        {breads.map((bread) => (
          <Cards key={bread.id} obj={bread} />
        ))}
      </section>
    </div>
  );
};
