import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
});

export const User = sequelize.define("User", {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
});

export const Settings = sequelize.define("Settings", {
  weatherUrl: DataTypes.STRING,
  weatherApiKey: DataTypes.STRING,
  email: DataTypes.STRING,
  userId: DataTypes.INTEGER,
});
