import express from "express";
import { getUsers } from "../controllers/UserController.js";
import { authLogin, authMe } from "../controllers/AuthController.js";

const userRoute = express.Router();

userRoute.get("/api/users", getUsers);

userRoute.post("/api/auth/login", authLogin);

userRoute.get("/api/auth/me", authMe);

export default userRoute;
