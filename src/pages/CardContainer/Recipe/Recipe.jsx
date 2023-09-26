import React, { useState } from "react";
import "./Recipe.css";
import LazyLoad from "react-lazy-load";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast from "react-hot-toast";

const Recipe = ({ r }) => {
  const { recipe_name, ingredients, cooking_instructions, rating, recipe_img } =
    r;

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleDisableButton = () => {
    setButtonDisabled(true);
    toast.success("Your Favorite Recipe saved");
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <LazyLoad height={270} offset={300}>
          <img src={recipe_img} alt="" />
        </LazyLoad>
      </div>

      <div className="recipe-info">
        <h3>{recipe_name}</h3>
        <p>
          <span className="recipe-heading">Ingredients:</span> {ingredients}
        </p>
        <p>
          <span className="recipe-heading">Cooking Instructions:</span>{" "}
          {cooking_instructions}
        </p>
        <div className="recipe-rating">
          <span>Ratings: </span>{" "}
          <span>
            <Rating style={{ maxWidth: 100 }} value={3} readOnly />
          </span>
        </div>
      </div>
      <div>
        <button
          className="common-button"
          onClick={handleDisableButton}
          disabled={buttonDisabled}
        >
          Favorite Recipe
        </button>
      </div>
    </div>
  );
};

export default Recipe;
