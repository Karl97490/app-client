import { NavLink } from "react-router-dom";
import Baguette from "../assets/images/baguette-logo.webp";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100/60 backdrop-blur-md border-b border-white/10 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-xl text-base-content">
          <img src={Baguette} alt="Logo" className="h-8 w-8" />
          Sandwich Maker
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/sandwiches">Sandwiches</NavLink>
              <ul className="p-2">
                <li>
                  <NavLink to="/sandwiches/add">Make Your Own</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/breads">Breads</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <details>
              <summary>Sandwiches</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <NavLink to="/sandwiches">List</NavLink>
                </li>
                <li>
                  <NavLink to="/sandwiches/add">Make Your Own</NavLink>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <NavLink to="/breads">Breads</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
