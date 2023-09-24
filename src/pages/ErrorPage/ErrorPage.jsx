import React from "react";
import "./ErrorPage.css";
import { Link, useRouteError } from "react-router-dom";
import errorAnime from "../../assets/animation/error-anime.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="error-page">
      <div className="error-anime">
        <Lottie animationData={errorAnime} loop={true} />
      </div>

      {/* error-information */}
      <div className="error-info">
        <h2>{status}</h2>
        <h2>{error?.message}</h2>
      </div>

      {/* go back button  */}
      <div className="error-button">
        <Link to="/">
          <button className="common-button">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
