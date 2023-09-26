import React, { useContext } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };

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
        {user?.displayName && <p>{user.displayName}</p>}
        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt="User Profile Picture"
            className="profile-picture"
          />
        )}
        {user ? (
          <button className="common-button" onClick={handleLogout}>
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button className="common-button">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
