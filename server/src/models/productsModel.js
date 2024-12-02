import db from "../config/database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;
const Product = db.define(
  "products",
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
      unique: true,
      defaultValue: "",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    imageUrl: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  { timestamps: true, freezeTableName: true }
);

export default Product;

(async function () {
  try {
    await db.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
