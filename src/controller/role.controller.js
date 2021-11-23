const {
  create,
  deleteRole,
  updateRole,
  findOneRole,
  getRoleList,
} = require("../server/role.server");

const {
  createRoleError,
  endCreateRoleError,
  deleteRoleError,
  endDeleteRoleError,
  updateRoleError,
  endUpdateRoleError,
  getRoleError,
  endGetRoleError,
} = require("../config/errorType");
class RoleController {
  // 新增角色
  async createRole(ctx) {
    try {
      const { name, intro, menuList } = ctx.request.body;
      const res = await create({ name, intro, menuList });
      if (!res) return ctx.app.emit("error", createRoleError, ctx);
      ctx.body = {
        code: 0,
        message: "创建角色成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endCreateRoleError, ctx);
    }
  }

  // 删除角色
  async deleteRole(ctx) {
    try {
      const { id } = ctx.request.params;
      const res = await deleteRole({ id });
      if (res === 0) return ctx.app.emit("error", deleteRoleError, ctx);
      ctx.body = {
        code: 0,
        message: "删除角色成功",
        data: res,
      };
    } catch (err) {
      console.log(err);
      ctx.app.emit("error", endDeleteRoleError, ctx);
    }
  }

  //更新角色
  async patchRole(ctx) {
    try {
      const { id } = ctx.request.params;
      const { name, intro, menuList } = ctx.request.body;
      const res = await updateRole({ id, name, intro, menuList });
      // console.log(res, "res");
      if (!res) return ctx.app.emit("error", updateRoleError, ctx);
      ctx.body = {
        code: 0,
        message: "更新角色成功",
        data: res,
      };
    } catch (err) {
      console.log(err);
      ctx.app.emit("error", endUpdateRoleError, ctx);
    }
  }

  // 查询某个角色
  async getOneRole(ctx) {
    try {
      const { id } = ctx.request.params;

      const res = await findOneRole({ id });
      if (!res) return ctx.app.emit("error", getRoleError, ctx);
      console.log(res);
      ctx.body = {
        code: 0,
        message: "查询角色成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endGetRoleError, ctx);
    }
  }

  // 查询角色列表
  async getRoleList(ctx) {
    const res = await getRoleList();
    ctx.body = {
      code: 0,
      message: "查询角色列表成功",
      data: res,
    };
  }
}

module.exports = new RoleController();
