import React from "react";
import "./Loader.css";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <RotatingLines
        strokeColor="#ea7b23"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
