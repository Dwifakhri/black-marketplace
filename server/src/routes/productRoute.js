import express from "express";
import { getProducts, addProduct } from "../controllers/ProductController.js";

const productRoute = express.Router();
productRoute.get("/api/products", getProducts);
productRoute.post("/api/products", addProduct);

export default productRoute;
