import "../styles/HomePage.css";
import { Test } from "../../Test";

export const HomePage = () => {
  return (
    <div className=" w-full">
      <h1>Discover the world of sandwiches..!</h1>
      {/* <button className="discover">Discover</button> */}
      <button className="btn btn-accent text-lg border-neutral border-2">
        Discover
      </button>
      {/* <Test></Test> */}
    </div>
  );
};
