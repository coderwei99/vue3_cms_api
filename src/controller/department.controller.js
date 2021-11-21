const { findDepartment, create } = require("../server/department.server");
const { departmentParamsError } = require("../config/errorType");
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
}

module.exports = new DepartmentController();
