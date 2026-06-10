import "../styles/HomePage.css";
import { Test } from "../../Test";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Discover the world of sandwiches..!</h1>
      {/* <button className="discover">Discover</button> */}
      <button class="btn btn-primary">Discover</button>
      <Test></Test>
    </div>
  );
};
