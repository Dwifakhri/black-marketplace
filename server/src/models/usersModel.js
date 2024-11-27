import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const User = db.define(
  "users",
  {
    email: DataTypes.STRING,
    password: { type: DataTypes.STRING, allowNull: false },
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  { freezeTableName: true }
);

export default User;

(async () => {
  await db.sync();
})();
