const { DataTypes } = require("sequelize");

const seq = require("../db/seq");
const Department = seq.define("Departments", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名需要是唯一",
  },
  // parentId: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   comment: "真实姓名",
  // },
  leader: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: "领导",
  },
});

// Department.sync({ force: true });
module.exports = Department;
