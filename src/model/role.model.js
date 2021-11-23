const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const Role = seq.define("role", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "角色名是唯一的",
  },
  intro: {
    type: DataTypes.STRING,
    comment: "角色简介",
  },
});
// Role.sync({ force: true });
module.exports = Role;
