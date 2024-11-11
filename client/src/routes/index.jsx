import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/index.jsx";

const route = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default route;
