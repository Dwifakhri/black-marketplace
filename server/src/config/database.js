import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  { host: process.env.DATABASE_HOST, dialect: "mysql" }
);

export default db;
