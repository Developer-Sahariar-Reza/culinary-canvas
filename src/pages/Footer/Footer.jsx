import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import toast from "react-hot-toast";

const Footer = () => {
  const handleGoButton = () => {
    toast.success("Now you will get update about or latest recipe and chef");
  };
  return (
    <footer>
      <section className="culinary-canvas-social-media">
        <div className="social-media">
          <Link to="https://www.facebook.com/">
            <FaFacebook />
          </Link>
          <Link to="https://twitter.com/">
            <FaSquareXTwitter />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagram />
          </Link>
          <Link to="https://youtube.com/">
            <FaYoutube />
          </Link>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="" />
          <span>Culinary Canvas</span>
        </div>
        <div className="footer-newsletter">
          <h4>SignUp For Our Email NewsLetter</h4>
          <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button className="go-button" onClick={handleGoButton}>
              Go
            </button>
          </div>
        </div>
      </section>
      <section className="culinary-canvas-address-container">
        <p>Agrabad, Chattogram</p>
        <p>|</p>
        <p>admin@culinary-canvas.com</p>
        <p>|</p>
        <p>+880-1234567890</p>
      </section>
      <p className="copyright-text">Copyright © Culinary Canvas 2023</p>
    </footer>
  );
};

export default Footer;
