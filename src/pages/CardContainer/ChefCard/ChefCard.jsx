import React from "react";
import "./ChefCard.css";
import { FaThumbsUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const {
    _id,
    chef_picture,
    chef_name,
    years_of_experience,
    total_recipe,
    likes,
  } = chef;

  return (
    <div className="chef-card">
      <div className="chef-image">
        <LazyLoad height={250} offset={200}>
          <img
            src={chef_picture}
            alt={`Picture of ${chef_name}`}
            title={chef_name}
          />
        </LazyLoad>
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
        <Link to={`/chef/${_id}`}>
          <button className="common-button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
