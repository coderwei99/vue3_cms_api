const {
  createMenus,
  deleteMenu,
  updateMenu,
  findOneMenu,
  findAllMenus,
} = require("../server/menus.server");
const {
  endcreateMenuError,
  deleteMenuError,
  updateMenuError,
  endUpdateMenuError,
  getOneMenuError,
  endfindOneMenuError,
  getAllMenuError,
  endfindAllMenuError,
} = require("../config/errorType");
const handleMenus = require("../utils/handleTree");

class MenusController {
  // 新增菜单
  async createMenu(ctx) {
    try {
      const { name, type, icon, url, sort, parentId, permission } =
        ctx.request.body;
      const res = await createMenus({
        name,
        type,
        icon,
        url,
        sort,
        parentId,
        permission,
      });
      ctx.body = {
        code: 0,
        message: "新增菜单成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endcreateMenuError, ctx);
    }
  }

  // 删除菜单
  async deleteMenu(ctx) {
    try {
      const { id } = ctx.request.params;
      const res = await deleteMenu({ id });
      if (res) return ctx.app.emit("error", deleteMenuError, ctx);
      ctx.body = {
        code: 0,
        message: "删除菜单成功",
        data: null,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", enddeleteMenuError, ctx);
    }
  }

  // 修改菜单
  async patchMenu(ctx) {
    try {
      const { id } = ctx.request.params;
      const { name, type, icon, url, sort, parentId, permission } =
        ctx.request.body;
      const res = await updateMenu({
        id,
        name,
        type,
        icon,
        url,
        sort,
        parentId,
        permission,
      });
      if (res) return ctx.app.emit("error", updateMenuError, ctx);
      ctx.body = {
        code: 0,
        message: "修改菜单成功",
        data: null,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endUpdateMenuError, ctx);
    }
  }

  // 获取一个菜单
  async getOneMenu(ctx) {
    try {
      const { id } = ctx.request.params;
      const res = await findOneMenu({ id });
      if (!res) return ctx.app.emit("error", getOneMenuError, ctx);
      ctx.body = {
        code: 0,
        message: "获取菜单成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endfindOneMenuError, ctx);
    }
  }

  // 获取所有菜单
  async getAllMenus(ctx) {
    try {
      const res = await findAllMenus();
      // 对res的数据进行处理
      const result = handleMenus(res);
      if (!result) return ctx.app.emit("error", getAllMenuError, ctx);
      ctx.body = {
        code: 0,
        message: "获取所有菜单成功",
        data: {
          list: result,
        },
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endfindAllMenuError, ctx);
    }
  }
}

module.exports = new MenusController();
