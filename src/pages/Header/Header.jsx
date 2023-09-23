import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* logo and brand className */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="" />
          <span>Culinary Canvas</span>
        </Link>
      </div>

      {/* nav container  */}
      <Nav />

      {/* user profile information container  */}
      <div className="profile-container">
        <p>Profile</p>
        <Link to="/login">
          <button className="common-button">Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
