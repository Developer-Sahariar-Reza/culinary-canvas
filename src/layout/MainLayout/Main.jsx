import React from "react";
import "./Main.css";
import Header from "../../pages/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="layout-height-adjustment">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
