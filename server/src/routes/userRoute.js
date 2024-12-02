import express from "express";
import { getUsers } from "../controllers/UserController.js";

const userRoute = express.Router();

userRoute.get("/api/users", getUsers);

export default userRoute;
