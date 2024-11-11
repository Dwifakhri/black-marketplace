import React from "react";
import Navbar from "../components/Navbar.jsx";

const LayoutDefault = ({ children }) => {
  return (
    <div className="bg-black relative">
      <Navbar></Navbar>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default LayoutDefault;
