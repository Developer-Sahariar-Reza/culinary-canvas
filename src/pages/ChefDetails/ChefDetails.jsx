import React from "react";
import "./ChefDetails.css";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const chef = useLoaderData();
  console.log(chef.chef_name);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default ChefDetails;
