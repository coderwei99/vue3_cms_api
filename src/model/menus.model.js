const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Menus = seq.define("menus", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "菜单名称",
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "菜单类型",
  },
  icon: {
    type: DataTypes.STRING,
    comment: "菜单图标",
  },
  url: {
    type: DataTypes.STRING,
    comment: "菜单url",
  },
  sort: {
    type: DataTypes.INTEGER,
    comment: "菜单排序",
  },
  parentId: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: "父级菜单id",
  },
  permission: {
    type: DataTypes.STRING,
    comment: "菜单按钮权限",
  },
});
// Menu.sync({ force: true });
module.exports = Menus;
