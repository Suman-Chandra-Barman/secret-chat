import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import Footer from "../pages/Shared/Navbar/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-5">
        <div className="w-1/3">
          <Profile />
        </div>
        <div className="w-2/3">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
