import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import heroAnime from "../../assets/animation/heroAnime.json";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1>Artistry on a Plate: Culinary Canvas</h1>
        <h4>
          Savor the Symphony of Flavors and Aesthetics: Discover Culinary Canvas
          - Where Food Becomes Art and Every Bite Tells a Story. Immerse
          Yourself in the Fusion of Japanese Tradition and Creative Ingenuity,
          Embark on an Unforgettable Culinary Journey in the Heart of Japan.
        </h4>
        <Link to="/about">
          <button className="common-button">Know More About Us</button>
        </Link>
      </div>
      <div className="hero-anime">
        <Lottie animationData={heroAnime} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
