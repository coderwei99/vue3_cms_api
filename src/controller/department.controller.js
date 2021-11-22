const {
  findDepartment,
  create,
  deleteDepartment,
  update,
} = require("../server/department.server");
const {
  departmentParamsError,
  deletePartmentError,
  EnddeleteDepartmentError,
  EndcreateDepartmentError,
  patchPartmentError,
  EndPatchPartmentError,
} = require("../config/errorType");
class DepartmentController {
  // 新建部门
  async createdepartment(ctx) {
    const { name, leader, parentId } = ctx.request.body;
    // console.log(name, leader);
    try {
      const result = await findDepartment({ name, parentId, leader });
      if (result) return ctx.app.emit("error", departmentParamsError, ctx);
      const res = await create({ name, parentId, leader });
      ctx.body = {
        code: 0,
        message: "创建部门成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", EndcreateDepartmentError, ctx);
    }
  }

  // 删除部门
  async delteDepartment(ctx) {
    const { id } = ctx.request.params;
    try {
      const res = await deleteDepartment({ id });
      if (!res) return ctx.app.emit("error", deletePartmentError, ctx);
      ctx.body = {
        code: 0,
        message: "删除部门成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", EnddeleteDepartmentError, ctx);
    }
  }

  // 修改部门
  async patchDepartment(ctx) {
    const { name, parentId, leader } = ctx.request.body;
    const { id } = ctx.request.params;
    try {
      const res = await update({ id, name, parentId, leader });
      if (res) return ctx.app.emit("error", patchPartmentError, ctx);
      ctx.body = {
        code: 0,
        message: "修改部门成功",
        data: null,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", EndPatchPartmentError, ctx);
    }
  }
}

module.exports = new DepartmentController();
