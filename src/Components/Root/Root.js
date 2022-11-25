import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className='mt-20'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
