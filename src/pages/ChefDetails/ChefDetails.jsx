import React from "react";
import "./ChefDetails.css";
import { Link, useLoaderData } from "react-router-dom";
import Recipe from "../CardContainer/Recipe/Recipe";
import LazyLoad from "react-lazy-load";
import { FaArrowRightLong } from "react-icons/fa6";

const ChefDetails = () => {
  const chef = useLoaderData();
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    total_recipe,
    bio,
    recipes,
  } = chef;

  return (
    <div className="chef-details">
      <div className="chef-details-info-container">
        <div className="chef-details-info">
          <h2>Chef Name: {chef_name}</h2>
          <p>Bio: {bio}</p>
          <p>Total Experience: {years_of_experience} years</p>
          <p>Total Recipe: {total_recipe}</p>
        </div>

        <div className="chef-details-image">
          <LazyLoad height={300} offset={300}>
            <img src={chef_picture} alt="" />
          </LazyLoad>
        </div>
      </div>

      <div className="recipe-section">
        <h3>Chef's Top 3 Recipes</h3>
        <div className="recipe-container">
          {recipes.map((r) => (
            <Recipe key={r.recipe_name} r={r} />
          ))}
        </div>
      </div>

      <div className="recipe-go-back">
        <Link to="/">
          <button className="common-button">
            <span>Go Back To Home</span> <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChefDetails;
