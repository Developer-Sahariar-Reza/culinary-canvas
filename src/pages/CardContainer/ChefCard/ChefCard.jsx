import React from "react";
import "./ChefCard.css";
import { FaThumbsUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    _id,
    chef_picture,
    chef_name,
    years_of_experience,
    total_recipe,
    likes,
  } = chef;

  const navigate = useNavigate();

  const handleViewDetails = () => {};

  return (
    <div className="chef-card">
      <div className="chef-image">
        <img
          src={chef_picture}
          alt={`Picture of ${chef_name}`}
          title={chef_name}
        />
      </div>
      <div className="chef-info">
        <h3>{chef_name}</h3>
        <p>Experience: {years_of_experience} years</p>
        <p>Total Recipe: {total_recipe}</p>
        <p>
          Likes: {likes} <FaThumbsUp />
        </p>
      </div>
      <div className="view-details">
        <button
          className="common-button"
          onClick={() => handleViewDetails(_id)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ChefCard;
