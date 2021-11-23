// const RoleModel = require("../model/role.model");
// const MenuModel = require("../model/menus.model");
const { RoleModel, MenuModel } = require("../model/roleMenus.model");
class RoleServer {
  // 创建角色
  async create({ name, intro, menuList }) {
    try {
      const menu = await MenuModel.findAll({
        where: {
          id: menuList,
        },
      });
      const role = await RoleModel.create({ name, intro });
      await role.addMenuList(menu);
      return role;
    } catch (err) {
      console.log(err);
    }
  }

  // 删除角色
  async deleteRole({ id }) {
    const role = await RoleModel.destroy({ where: { id } });
    console.log(role);
    return role;
  }

  // 更新角色
  async updateRole({ id, name, intro, menuList }) {
    const menu = await MenuModel.findAll({ where: { id: menuList } });
    try {
      const role = await RoleModel.findOne({ where: { id } });
      // console.log(role);
      let info = {};
      name && Object.assign(info, { name });
      intro && Object.assign(info, { intro });
      await role.update(info);
      role.setMenuList(menu);
      return role;
    } catch (err) {
      console.log(err);
    }
  }

  // 查询某个角色
  async findOneRole({ id }) {
    const res = await RoleModel.findOne({ where: { id } });
    return res;
  }

  // 查询角色列表
  async getRoleList() {
    try {
      const role = await RoleModel.findAll();
      // console.log(role.length);
      let arr = [];
      role.forEach(item => {
        arr.push(item.dataValues.id);
      });
      // console.log(arr);
      let obj = [];
      for (let i = 0; i < arr.length; i++) {
        const _item = await RoleModel.findByPk(arr[i]);
        // console.log(_item);
        const menuList = await _item.getMenuList();
        obj[i] = {
          ..._item.dataValues,
          menuList,
        };
      }

      return {
        count: arr.length,
        list: obj,
      };
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new RoleServer();
