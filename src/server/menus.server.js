const Menus = require("../model/menus.model");

class MenusServer {
  // 新建菜单
  async createMenus({ name, type, icon, url, sort, parentId, permission }) {
    const res = await Menus.create({
      name,
      type,
      icon,
      url,
      sort,
      parentId,
      permission,
    });
    console.log(res);
    return res;
  }

  // 删除菜单
  async deleteMenu({ id }) {
    const res = await Menus.destroy({ where: { id } });
    return res === 0;
  }

  // 更新菜单
  async updateMenu({ id, name, type, icon, url, sort, parentId, permission }) {
    let newInfo = {};
    name && Object.assign(newInfo, { name });
    type && Object.assign(newInfo, { type });
    icon && Object.assign(newInfo, { icon });
    url && Object.assign(newInfo, { url });
    sort && Object.assign(newInfo, { sort });
    parentId && Object.assign(newInfo, { parentId });
    permission && Object.assign(newInfo, { permission });
    const res = await Menus.update(newInfo, { where: { id } });
    return res[0] === 0 ? true : false;
  }

  // 获取一个菜单
  async findOneMenu({ id }) {
    const res = await Menus.findOne({ where: { id } });
    return res;
  }

  // 获取所有菜单
  async findAllMenus() {
    const res = await Menus.findAll();
    return res;
  }
}

module.exports = new MenusServer();
