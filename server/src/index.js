import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config({ path: ".env.local" });
import indexRoute from "./routes/index.js";

const app = express();
const server = http.createServer(app);

const options = {
  origin: process.env.ALLOWED_CORS?.split(","),
  credentials: true,
};

app.use(cors({ options }));
app.use(bodyParser.json());
app.use(express.json());
app.get("/", (req, res) => {
  res.json("Welcome to back end server black market");
});
indexRoute(app);

server.listen(process.env.BASE_URL_PORT, process.env.BASE_URL_HOST, () => {
  console.log(`Listening app in port:${process.env.BASE_URL_PORT}`);
});
