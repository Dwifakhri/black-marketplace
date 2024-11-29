import db from "../config/database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;
const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    imageUrl: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  { timestamps: true, freezeTableName: true }
);

(async function () {
  try {
    await db.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
