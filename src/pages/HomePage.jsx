import { NavLink } from "react-router-dom";
import "../styles/HomePage.css";

export const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-t from-secondary/80 via-secondary/30 to-base-100 flex items-center justify-center px-6">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:10px_10px]" />

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Build your perfect sandwich
        </h1>

        <p className="mt-6 text-base-content/70 text-lg leading-relaxed">
          Create, explore and rate sandwiches from around the world.
          <br />
          Simple. Fun. Delicious.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink to="/sandwiches/add">
            <button className="btn btn-primary btn-lg shadow-lg">
              Get started
            </button>
          </NavLink>
          <NavLink to="/sandwiches">
            <button className="btn btn-outline btn-lg">
              Explore sandwiches
            </button>
          </NavLink>
        </div>

        <p className="mt-6 text-sm text-base-content/50">
          No account required — just start building.
        </p>
      </div>
    </div>
  );
};
