import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from ""
import Index from "../pages/index.jsx";
import Login from "../pages/login.jsx";

const App = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};



export default App;
