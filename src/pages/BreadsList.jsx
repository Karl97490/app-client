import "../styles/BreadsList.css";
import "../styles/Cards.css";
import { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const BreadsList = () => {
  const [breads, setBreads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/breads`,
      );
      setIsLoading(false);
      console.log(response.data);
      setBreads(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  if (isLoading) {
    return <h2>Sorry we are loading the page...</h2>;
  }

  return (
    <div className="breads-page">
      <h2>This is BreadsList component...</h2>
      <section className="cards-container">
        {breads.map((bread) => {
          return (
            // <h2>{bread.title}</h2>
            <Cards key={bread.id} obj={bread} />
          );
        })}
      </section>
    </div>
  );
};
