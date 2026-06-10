import { NavLink } from "react-router-dom";
import Baguette from "../assets/images/baguette-logo.webp";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Baguette} alt="Logo" className="size-9 shrink-0" />
        <span id="title">Sandwich Maker</span>
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/sandwiches">Sandwiches</NavLink>
          </li>
          <li>
            <NavLink to="/breads">Breads</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
