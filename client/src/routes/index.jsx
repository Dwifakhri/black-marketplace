import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "../pages/index.jsx";
import Login from "../pages/login.jsx";
import { useCookie } from "../utils/useCookie.js";
import { useLogout } from "../utils/useCookie.js";
import { api } from "../utils/useAxios.js";
import axios from "axios";

const App = () => {
  const { cookie } = useCookie();
  const { logOut } = useLogout();

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { status } = error;
      if (status === 401) {
        logOut();
      }
      return error;
    }
  );

  (async function () {
    if (cookie.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${cookie.token}`;
      await api("/auth/me", {
        method: "GET",
      });
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  })();

  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/login"
          element={cookie.token ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
