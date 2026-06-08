import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BreadDetails.css";

export const BreadDetails = () => {
  const { breadId } = useParams();
  const [bread, setBread] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/breads/${breadId}`,
      );
      setIsLoading(false);
      console.log(response);
      setBread(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  if (isLoading) {
    return <h1>We are loading the page...</h1>;
  }

  return (
    <div className="bread-details-page">
      <h1>This is BreadDetails component...</h1>
      <main className="bread-details">
        <section className="hero">
          <img src={bread.image} alt={bread.name} className="hero-image" />

          <div className="hero-content">
            <h1>{bread.name}</h1>
            <p className="bread-type">{bread.type}</p>
            <h3>Description</h3>
            <p className="description">{bread.description}</p>
          </div>
        </section>

        <section className="details-grid">
          <article className="details-card">
            <h2>Origin</h2>

            <dl>
              <dt>Country</dt>
              <dd>{bread.origin}</dd>

              <dt>City</dt>
              <dd>Placeholder</dd>
            </dl>
          </article>

          <article className="details-card">
            <h2>Characteristics</h2>

            <dl>
              <dt>Flour</dt>
              <dd>Placeholder</dd>

              <dt>Crust</dt>
              <dd>Placeholder</dd>

              <dt>Texture</dt>
              <dd>Placeholder</dd>

              <dt>Weight</dt>
              <dd>Placeholder</dd>

              <dt>Shape</dt>
              <dd>Placeholder</dd>
            </dl>
          </article>
        </section>
        <div className="btn-container">
          <Link to="/breads">
            <button>Back</button>
          </Link>
        </div>
      </main>
    </div>
  );
};
