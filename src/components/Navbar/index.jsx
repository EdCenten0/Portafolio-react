import React from "react";
import { NavLink } from "react-router-dom";
import home from "./home.svg";
import briefcase from "./briefcase.svg";
import contact from "./contact.svg";
import dark_mode from "./dark_mode.svg";
import light_mode from "./light_mode.svg";
import github from "./github.svg";
import linkedin from "./linkedin.svg";

const Navbar = () => {
  const activeStyle = "underline underline-offset-8";

  return (
    <nav className="w-full h-10 p-6 bg-teal-700 rounded-lg flex items-center col-span-3 row-start-1 m-auto">
      <ul className="w-full flex flex-row gap-8 justify-between">
        <div className="flex flex-row gap-4">
          <li className="flex flex-row items-center gap-1">
            <NavLink
              className="flex flex-row items-center gap-1"
              to="/"
              onClick={() => {}}
            >
              <img src={home} alt="home" className="h-7 w-7" />
              <p>Home</p>
            </NavLink>
          </li>
          <li className="flex flex-row items-center gap-1">
            <NavLink
              className="flex flex-row items-center gap-1"
              to="/projects"
              onClick={() => {}}
            >
              <img src={briefcase} alt="home" className="h-7 w-7" />
              <p>Projects</p>
            </NavLink>
          </li>
          <li className="flex flex-row items-center gap-1">
            <NavLink
              className="flex flex-row items-center gap-1"
              to="/contact"
              onClick={() => {}}
            >
              <img src={contact} alt="home" className="h-7 w-7" />
              <p>Contact me</p>
            </NavLink>
          </li>
        </div>
        <div className="flex flex-row gap-4">
          <li className="flex flex-row items-center gap-1">
            <img src={dark_mode} alt="home" className="h-7 w-7" />
          </li>
          <li className="flex flex-row items-center gap-1">
            <img src={github} alt="home" className="h-7 w-7" />
          </li>
          <li className="flex flex-row items-center gap-1">
            <img src={linkedin} alt="home" className="h-7 w-7" />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
