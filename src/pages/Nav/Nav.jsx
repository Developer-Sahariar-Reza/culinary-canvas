import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Register"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
