import Baguette from "../assets/images/baguette-logo.webp";
import Github from "../assets/images/github.png";
import LinkedIn from "../assets/images/linkedin.png";

import { NavLink, Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary/70 backdrop-blur-md text-secondary-content py-6 gap-4 border-t border-white/10">
      <aside>
        <img src={Baguette} alt="Logo" className="h-11 w-11 shrink-0" />

        <p className="font-bold">Crack it Squad - Ironhack</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="">
            <img src={LinkedIn} alt="Home icon" className="h-8 w-8 shrink-0" />
          </Link>
          <Link to="https://github.com/Karl97490/app-client">
            <img src={Github} alt="Github Logo" className="h-8 w-8 shrink-0" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

<div className="footer">
  <div className="logo-container">
    <img src={Baguette} alt="Logo" className="size-10 shrink-0" />
  </div>
</div>;
