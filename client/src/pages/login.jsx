import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gadget from "../assets/images/gadget.png";
import logo from "../assets/icons/logo-black.svg";
import CrossSmall from "../assets/icons/cross-small.svg";
import { useCookie } from "../utils/useCookie";
import { api } from "../utils/useAxios";

const Login = () => {
  const navigate = useNavigate();
  const { setCookie } = useCookie();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("fakhri@mail.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  const loginForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await api("/auth/login", {
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    });
    if (result.status === 200) {
      setCookie("token", result.data.jwt, {
        secure: true,
        maxAge: 7 * 24 * 60 * 60,
      });
      navigate("/");
    } else {
      setError(result.response.data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 justify-center place-items-center">
      <div className="hidden md:flex bg-black items-center justify-center w-full h-full">
        <img src={gadget} alt="gadget" />
      </div>
      <form className="lg:min-w-[30rem]" onSubmit={loginForm}>
        <img src={logo} alt="logo" className="mb-5" />
        {error && (
          <div className="flex justify-between align-center border border-[#f5c6cb] bg-[#f8d7da] py-3 px-4 rounded-sm mb-3">
            <p className="text-[#721c24]">{error}</p>
            <button type="button" onClick={() => setError("")}>
              <img src={CrossSmall} width={18} height={18} alt="close" />
            </button>
          </div>
        )}
        <div className="w-full min-w-[200px] mb-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-black font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#B0B0B0] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full min-w-[200px] mb-5">
          <label
            htmlFor="current-password"
            className="block mb-2 text-sm text-black font-semibold">
            Password
          </label>
          <input
            id="current-password"
            name="current-password"
            autoComplete="current-password"
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
