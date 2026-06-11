import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="max-w-6xl mx-auto p-6 bg-red-500">
      <section className="grid lg:grid-cols-[350px_1fr] gap-8">
        {/* Image */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="p-4">
            <img
              src="https://i.redd.it/6p8s2ry7jgx71.jpg"
              alt={bread.name}
              className="rounded-xl w-full h-80 object-cover"
            />
          </figure>
        </div>

        {/* Infos */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold">{bread.name}</h1>

            <div className="mt-3 flex gap-2">
              <div className="badge badge-primary badge-lg">{bread.type}</div>

              <div className="badge badge-outline badge-lg">{bread.origin}</div>
            </div>
          </div>

          {/* Description */}
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Description</h2>

              <p className="leading-relaxed">{bread.description}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Origin</div>

              <div className="stat-value text-lg">{bread.origin}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Bread Type</div>

              <div className="stat-value text-lg">{bread.type}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="card bg-base-100 shadow-xl mt-8">
        <div className="card-body">
          <h2 className="card-title">Ingredients</h2>

          <div className="flex flex-wrap gap-3">
            {bread.ingredients?.length > 0 ? (
              bread.ingredients.map((ingredient) => (
                <div key={ingredient} className="badge badge-outline badge-lg">
                  {ingredient}
                </div>
              ))
            ) : (
              <div className="alert">
                <span>No ingredients available.</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
