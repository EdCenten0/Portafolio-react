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
    <nav
      style={{ backgroundColor: "#376ca0" }}
      className=" order-1 w-full h-10 p-6  rounded-lg flex items-center col-span-3 row-start-1 m-auto mb-4"
    >
      <ul className="w-full flex flex-row gap-8 justify-between">
        <div className="flex flex-row gap-4">
          <li className="flex flex-row items-center gap-1 rounded-xl hover:scale-125 hover:px-2 transition-all ">
            <NavLink
              className="flex flex-row items-center gap-1"
              to="/"
              onClick={() => {}}
            >
              <img src={home} alt="home" className="h-7 w-7" />
              <p className="hidden md:inline">Home</p>
            </NavLink>
          </li>
          <li className="flex flex-row items-center gap-1 hover:scale-125 hover:px-2 transition-all">
            <NavLink
              className="flex flex-row items-center gap-1"
              to="/projects"
              onClick={() => {}}
            >
              <img src={briefcase} alt="home" className="h-7 w-7" />
              <p className="hidden md:inline">Projects</p>
            </NavLink>
          </li>
          <li className="flex flex-row items-center gap-1 hover:scale-125 hover:px-2 transition-all">
            <NavLink
              className="flex flex-row items-center gap-1"
              to="/contact"
              onClick={() => {}}
            >
              <img src={contact} alt="home" className="h-7 w-7" />
              <p className="hidden md:inline">Contact me</p>
            </NavLink>
          </li>
        </div>
        <div className="flex flex-row gap-4">
          <li className="flex flex-row items-center gap-1 hover:scale-125 hover:px-2 transition-all">
            <a href="https://github.com/EdCenten0">
              <img src={github} alt="Github" className="h-7 w-7" />
            </a>
          </li>
          <li className="flex flex-row items-center gap-1 hover:scale-125 hover:px-2 transition-all">
            <a href="https://www.linkedin.com/in/carlos-centeno-2a4669186/">
              <img src={linkedin} alt="LinkedIn" className="h-7 w-7" />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
