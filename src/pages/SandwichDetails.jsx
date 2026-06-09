import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

import "../styles/SandwichDetails.css";

export const SandwichDetails = () => {
  const { sandwichId } = useParams();
  const [sandwich, setSandwich] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches/${sandwichId}?_expand=bread`,
      );
      setIsLoading(false);
      // console.log(response.data);
      setSandwich(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  if (isLoading) {
    return <h1>We are loading the page...</h1>;
  }

  return (
    <div className="sandwich-details-page">
      <h1>This is SandwichDetails component...</h1>
      <main className="sandwich-details">
        <section className="hero">
          <img
            src={sandwich.image}
            alt={sandwich.name}
            className="hero-image"
          />

          <div className="hero-content">
            <h1>{sandwich.name}</h1>
            <p className="nickname">{sandwich.nickname}</p>
            <h3>Description</h3>
            <p className="description">{sandwich.description}</p>
          </div>
        </section>

        <section className="details-grid">
          <article className="details-card">
            <h2>Location</h2>

            <dl>
              <dt>Country</dt>
              <dd>{sandwich.location.country}</dd>

              <dt>City</dt>
              <dd>{sandwich.location.city}</dd>
            </dl>
          </article>

          <article className="details-card">
            <h2>Bread</h2>
            <ul>
              <li>Name: {sandwich.bread.name}</li>
              <li>Type: {sandwich.bread.type}</li>
              <li>Origin: {sandwich.bread.origin}</li>
              <li>Ingredients: {}</li>
            </ul>
            <NavLink to={`/breads/details/${sandwich.bread.id}`}>
              <button>More</button>
            </NavLink>
          </article>

          <article className="details-card">
            <h2>Ingredients</h2>

            <ul>
              <li>Lettuce: {sandwich.ingredients.lettuce}</li>
              <li>Cheese: {sandwich.ingredients.cheese}</li>
              <li>Meat: {sandwich.ingredients.meat}</li>
              <li>Veggies: {sandwich.ingredients.veggies}</li>
              <li>Sauce: {sandwich.ingredients.sauce}</li>
            </ul>
          </article>
        </section>
        <div className="btn-container">
          {sandwich.id.length > 2 && (
            <NavLink to={`/sandwiches/edit/${sandwich.id}`}>
              <button>Edit</button>
            </NavLink>
          )}
          <Link to="/sandwiches">
            <button>Back</button>
          </Link>
        </div>
      </main>
    </div>
  );
};
