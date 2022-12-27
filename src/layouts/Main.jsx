import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Navbar/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
