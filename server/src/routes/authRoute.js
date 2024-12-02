import express from "express";
import {
  authLogin,
  authMe,
  authRegister,
} from "../controllers/AuthController.js";

const authRoute = express.Router();

authRoute.post("/api/auth/register", authRegister);
authRoute.post("/api/auth/login", authLogin);
authRoute.get("/api/auth/me", authMe);

export default authRoute;
