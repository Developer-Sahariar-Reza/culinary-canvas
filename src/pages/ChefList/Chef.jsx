import React, { useEffect, useState } from "react";
import "./Chef.css";
import ChefCard from "../CardContainer/ChefCard/ChefCard";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch(
      "https://culinary-canvas-server-h6wjvp2so-developer-sahariar-reza.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="chef-section">
      <h1>Hello chef</h1>

      <div className="chef-container">
        {chefs.map((chef) => (
          <ChefCard key={chef._id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
