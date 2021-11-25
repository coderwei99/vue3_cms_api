const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Category = seq.define("categorys", {
  name: {
    type: DataTypes.STRING,
  },
});

// Category.sync({ force: true });
module.exports = Category;
