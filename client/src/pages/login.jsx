import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gadget from "../assets/images/gadget.png";
import logo from "../assets/icons/logo-black.svg";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("password");

  const loginForm = () => {
    setLoading(true);
    const emailp = "user@gmail.com";
    const passwordp = "password";
    setTimeout(() => {
      if (email === emailp && password === passwordp) {
        document.cookie = "auth=loggedIn";
        navigate("/");
      } else {
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 justify-center place-items-center">
      <div className="hidden md:flex bg-black items-center justify-center w-full h-full">
        <img src={gadget} alt="gadget" />
      </div>
      <form
        className="lg:min-w-[30rem]"
        onSubmit={(e) => loginForm(e.preventDefault())}>
        <img src={logo} alt="logo" className="mb-5" />
        <div className="w-full min-w-[200px] mb-3">
          <label className="block mb-2 text-sm text-black font-semibold">
            Email
          </label>
          <input
            type="email"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#B0B0B0] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full min-w-[200px] mb-5">
          <label className="block mb-2 text-sm text-black font-semibold">
            Password
          </label>
          <input
            type="password"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#B0B0B0] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="mt-3 bg-primary w-full font-semibold py-2 rounded-md"
          disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
