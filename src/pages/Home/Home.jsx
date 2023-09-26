import React from "react";
import Chef from "../ChefList/Chef";
import Hero from "../Hero/Hero";
import FeaturedFood from "../FeaturedFood/FeaturedFood";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedFood />
      <Chef />
    </div>
  );
};

export default Home;
