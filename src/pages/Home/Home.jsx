import React from "react";
import Chef from "../ChefList/Chef";
import Hero from "../Hero/Hero";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import OurClient from "../OurClient/OurClient";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedFood />
      <Chef />
      <OurClient />
    </div>
  );
};

export default Home;
