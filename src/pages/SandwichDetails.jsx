import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Comments } from "../components/Comments";
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
    return <h1>We are loading the page...</h1>;
  }

  return (
    <div className="w-full pb-10">
      <section className="hero">
        <div className="hero-content flex-col lg:flex-row bg-red-100 gap-5">
          <img
            src="https://static.vecteezy.com/ti/vecteur-libre/p1/50084123-pixel-art-burger-jeu-atout-conception-vectoriel.jpg"
            className="max-w-xs rounded-lg shadow-xl"
            alt={sandwich.name}
          />
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="font-bold">{sandwich.name}</h1>
              <p className="text-lg italic opacity-70 mt-1">
                "{sandwich.nickname}"
              </p>
            </div>
            <div className="flex flex-col">
              <h3>Description</h3>
              <p className="min-h-[5rem] py-5 flex items-center">
                {sandwich.description}
              </p>
            </div>
            <div className="stats shadow">
              <div className="stat px-4">
                <div className="stat-title">Origin</div>
                <div className="stat-value text-lg">
                  {sandwich.location.country}
                </div>
                <div className="stat-desc">{sandwich.location.city}</div>
              </div>

              <div className="stat px-4">
                <div className="stat-title">Bread</div>
                <div className="stat-value text-lg">{sandwich.bread.type}</div>
                <div className="stat-desc">{sandwich.bread.origin}</div>
              </div>
            </div>
            <section className="card bg-red-100 shadow">
              <div className="card-body">
                <h2 className="card-title mb-4 justify-center">Ingredients</h2>

                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <tbody>
                      {sandwich.ingredients.lettuce && (
                        <tr>
                          <th className="w-1fr">🥬 Lettuce</th>
                          <td className="bg-blue">
                            {sandwich.ingredients.lettuce}
                          </td>
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
                          <td>{sandwich.ingredients.sauce || "None"}</td>
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

      <div className="divider"></div>

      <section className="card bg-red-100 w-[95%] m-auto shadow-md">
        <h2 className="card-titlejustify-center">Community Rating</h2>
        <div className="card-body ">
          <div className="flex justify-center gap-10">
            <button className="btn btn-success w-30 sm:max-w-xs h-12 ">
              Like
            </button>

            <button className="btn btn-error w-30 sm:max-w-xs h-12 ">
              Dislike
            </button>
          </div>

          {/* <div className="flex justify-between text-sm opacity-70 mb-1">
              <span>Community approval</span>

              <span>
                {Math.round(
                  (sandwich.votes.likes /
                    (sandwich.votes.likes + sandwich.votes.unlikes)) *
                    100,
                ) || 0}
                %
              </span>
            </div> */}
          {/* <progress
              className="progress progress-success w-full"
              value={
                Math.round(
                  (sandwich.votes.likes /
                    (sandwich.votes.likes + sandwich.votes.unlikes)) *
                    100,
                ) || 0
              }
              max="100"
            /> */}

          <div className="stats stats-horizontal shadow bg-base-100 mt-4">
            <div className="stat">
              <div className="stat-title">Likes</div>
              <div className="stat-value text-success">
                {sandwich.votes.likes}
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Score</div>
              <div className="stat-value">
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

      <div className="divider"></div>

      <section className="card bg-red-100 shadow-md w-[95%] mx-auto">
        <div className="card-body">
          <h2 className="card-title justify-center">Comments</h2>
          <Comments sandwichId={sandwichId} />
        </div>
      </section>
    </div>
  );
};
