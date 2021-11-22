const { DataTypes } = require("sequelize");

const seq = require("../db/seq");
const User = seq.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名,需要是唯一",
  },
  realname: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "真实姓名",
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: "密码",
  },
  departmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "部门ID",
  },
  cellphone: {
    type: DataTypes.CHAR(11),
    allowNull: false,
    comment: "联系人电话",
  },
  roleId: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: "是否为管理员,0:不是管理员，1:是管理员",
  },
});

// User.sync({ force: true });
module.exports = User;
