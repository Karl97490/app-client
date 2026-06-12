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
    <div className="w-full bg-base-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="hero bg-base-100 rounded-3xl shadow-xl border border-base-300">
          <div className="hero-content flex-col lg:flex-row gap-10 w-full p-6">
            <div className="card bg-base-100 shadow-lg border border-base-300 w-full max-w-xl">
              <figure className="p-5">
                <img
                  src={bread.image}
                  alt={bread.name}
                  className="rounded-2xl w-full object-cover"
                />
              </figure>
            </div>

            <div className="flex flex-col gap-5 lg:gap-10 w-full">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-5">
                  {bread.name}
                </h1>

                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  <div className="badge badge-primary badge-lg">
                    {bread.type}
                  </div>

                  <div className="badge badge-outline badge-lg">
                    {bread.origin}
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 border border-base-300 shadow-lg">
                <div className="card-body">
                  <h2 className="card-title text-primary justify-center">
                    Description
                  </h2>

                  <p className="leading-relaxed">{bread.description}</p>
                </div>
              </div>

              <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg border border-base-300">
                <div className="stat">
                  <div className="stat-title">Origin</div>

                  <div className="stat-value text-lg">{bread.origin}</div>

                  <div className="stat-desc">Traditional bread heritage</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Bread Type</div>

                  <div className="stat-value text-lg">{bread.type}</div>

                  <div className="stat-desc">Bakery category</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Ingredients</div>

                  <div className="stat-value text-lg">
                    {bread.ingredients?.length || 0}
                  </div>

                  <div className="stat-desc">Components</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider my-10">Composition</div>

        <section className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl">Ingredients</h2>

            {bread.ingredients.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {bread.ingredients.map((ingredient) => (
                  <div
                    key={ingredient}
                    className="badge badge-outline badge-lg p-4"
                  >
                    {ingredient}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="alert max-w-md rounded-lg">
                  <span>
                    No ingredient information available for this bread.
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="divider my-10">Bakery Facts</div>

        <section className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl">
              Bread Profile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-base-200">
                <div className="card-body">
                  <h3 className="font-bold text-primary">Origin</h3>

                  <p>{bread.origin}</p>
                </div>
              </div>

              <div className="card bg-base-200">
                <div className="card-body">
                  <h3 className="font-bold text-primary">Category</h3>

                  <p>{bread.type}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
