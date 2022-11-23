import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
