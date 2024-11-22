import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/index.jsx";
import Login from "../pages/login.jsx";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookie] = useCookies(["token"]);
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
