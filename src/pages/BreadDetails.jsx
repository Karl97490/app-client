import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingPage } from "./LoadingPage";
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
    return <LoadingPage page="load" />;
  }

  return (
    <div className="w-full py-8 px-5">
      <section className="grid lg:grid-cols-[auto_1fr] gap-8 bg-red-500 p-8">
        {/* Image */}
        <div className="card bg-base-100 shadow-xl max-w-md m-auto">
          <figure className="p-4">
            <img
              src="https://i.redd.it/6p8s2ry7jgx71.jpg"
              alt={bread.name}
              className="rounded-xl w-full object-cover"
            />
          </figure>
        </div>

        {/* Infos */}
        <div className="flex flex-col items-center gap-6 bg-green-400 px-10 py-5">
          <div>
            <h1 className="font-bold">{bread.name}</h1>

            <div className="flex gap-2">
              <div className="badge badge-primary badge-lg">{bread.type}</div>

              <div className="badge badge-outline badge-lg">{bread.origin}</div>
            </div>
          </div>

          {/* Description */}
          <div className="card bg-base-100 shadow px-5">
            <div className="card-body">
              <h2 className="card-title justify-center">Description</h2>
              <p className="text-left leading-relaxed">{bread.description}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 w-full py-5">
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

      <div className="divider"></div>

      {/* Ingredients */}
      <section className="card bg-base-100 shadow-xl bg-blue-500 ">
        <div className="card-body gap-7">
          <h2 className="card-title justify-center">Ingredients</h2>

          <div className="flex flex-wrap gap-3 justify-center">
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
