import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="card bg-base-100 shadow-xl border border-base-300 max-w-lg w-full">
        <div className="card-body items-center text-center">
          <span className="text-8xl">🥙</span>

          <h1 className="font-bold text-neutral">Oops!</h1>

          <h2 className="text-2xl font-semibold mt-1">
            Failed to load the page
          </h2>

          <p className="text-base-content/70 mt-1">
            Looks like our chef dropped the sandwich while fetching the data...
          </p>

          <div className="divider"></div>

          <Link to="/">
            <button className="btn btn-primary">Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
