const seq = require("../db/seq");

const RoleModel = require("./role.model");
const MenuModel = require("./menus.model");

const RoleMenu = seq.define("RoleMenu");
RoleModel.belongsToMany(MenuModel, { through: RoleMenu, as: "menuList" });
MenuModel.belongsToMany(RoleModel, { through: RoleMenu });

// RoleMenu.sync({ force: true });

module.exports = { RoleModel, MenuModel };
