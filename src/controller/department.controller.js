const {
  findDepartment,
  create,
  deleteDepartment,
} = require("../server/department.server");
const {
  departmentParamsError,
  deletePartmentError,
} = require("../config/errorType");
class DepartmentController {
  async createdepartment(ctx) {
    const { name, leader } = ctx.request.body;
    // console.log(name, leader);
    try {
      const result = await findDepartment({ name, leader });
      console.log(result);
      if (result) return ctx.app.emit("error", departmentParamsError, ctx);
      const res = await create({ name, leader });
      ctx.body = {
        code: 0,
        message: "创建部门成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
    }
  }

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
      console.log(err);
    }
  }
}

module.exports = new DepartmentController();
