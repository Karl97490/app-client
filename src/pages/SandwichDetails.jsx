import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Comments } from "../components/Comments";
import { LoadingPage } from "./LoadingPage";
import axios from "axios";

// import "../styles/SandwichDetails.css";

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
      // console.log(response.data);
      setIsLoading(false);
      setSandwich(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  if (isLoading) {
    return <LoadingPage page="load" />;
  }

  return (
    <div className="w-full bg-base-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="hero bg-base-100 rounded-3xl shadow-xl border border-base-300">
          <div className="hero-content flex-col lg:flex-row gap-10 w-full p-6">
            <div className="card bg-base-100 shadow-lg border border-base-300 w-full max-w-xl">
              <figure className="p-5 max-w-2xl">
                <img
                  src={
                    sandwich.image ||
                    "https://static.vecteezy.com/ti/vecteur-libre/p1/50084123-pixel-art-burger-jeu-atout-conception-vectoriel.jpg"
                  }
                  alt={sandwich.name}
                  className="rounded-2xl w-full object-cover"
                />
              </figure>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  {sandwich.name}
                </h1>

                {sandwich.nickname && (
                  <p className="italic text-lg opacity-60 mt-2">
                    "{sandwich.nickname}"
                  </p>
                )}
              </div>

              <div className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body">
                  <h2 className="card-title text-primary justify-center">
                    Description
                  </h2>

                  <p className="leading-relaxed">{sandwich.description}</p>
                </div>
              </div>
              <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg border border-base-300">
                <div className="stat">
                  <div className="stat-title">Country</div>

                  <div className="stat-value text-lg">
                    {sandwich.location.country}
                  </div>

                  <div className="stat-desc">{sandwich.location.city}</div>
                </div>

                <NavLink
                  to={`/breads/details/${sandwich.breadId}`}
                  className="hover:bg-base-200 transition"
                >
                  <div className="stat">
                    <div className="stat-title">Bread</div>

                    <div className="stat-value text-lg">
                      {sandwich.bread.type}
                    </div>

                    <div className="stat-desc">{sandwich.bread.name}</div>
                  </div>
                </NavLink>
              </div>
              <section className="card bg-base-100 shadow-lg border border-base-300">
                <div className="card-body">
                  <h2 className="card-title text-primary justify-center">
                    Ingredients
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        {sandwich.ingredients.lettuce && (
                          <tr>
                            <th>🥬 Lettuce</th>
                            <td>{sandwich.ingredients.lettuce}</td>
                          </tr>
                        )}

                        {sandwich.ingredients.cheese && (
                          <tr>
                            <th>🧀 Cheese</th>
                            <td>{sandwich.ingredients.cheese}</td>
                          </tr>
                        )}

                        {sandwich.ingredients.meat && (
                          <tr>
                            <th>🥩 Meat</th>
                            <td>{sandwich.ingredients.meat}</td>
                          </tr>
                        )}

                        {sandwich.ingredients.veggies && (
                          <tr>
                            <th>🥕 Veggies</th>
                            <td>{sandwich.ingredients.veggies}</td>
                          </tr>
                        )}

                        {sandwich.ingredients.sauce && (
                          <tr>
                            <th>🥫 Sauce</th>
                            <td>{sandwich.ingredients.sauce}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <div className="divider my-10">Community</div>

        <section className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body gap-5">
            <h2 className="card-title justify-center text-2xl">
              Community Rating
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <button className="btn btn-success btn-wide">Like</button>

              <button className="btn btn-error btn-wide">Dislike</button>
            </div>

            <div className="stats stats-vertical md:stats-horizontal shadow-lg border border-base-300 bg-base-100 mx-auto mt-4 w-full">
              <div className="stat">
                <div className="stat-title">Likes</div>

                <div className="stat-value text-success">
                  {sandwich.votes.likes}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Approval</div>

                <div className="stat-value text-primary">
                  {Math.round(
                    (sandwich.votes.likes /
                      (sandwich.votes.likes + sandwich.votes.unlikes)) *
                      100,
                  ) || 0}
                  %
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Dislikes</div>

                <div className="stat-value text-error">
                  {sandwich.votes.unlikes}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider my-10">Discussion</div>

        <section className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl">Comments</h2>

            <Comments sandwichId={sandwichId} />
          </div>
        </section>
      </div>
    </div>
  );
};
