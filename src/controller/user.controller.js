// 导入serve的函数
const { createUser } = require("../server/user.server");
const { regjsterError } = require("../config/errorType");

class UserController {
  // 注册用户
  async register(ctx) {
    const { name, realname, password, cellphone, departmentId, roleId } =
      ctx.request.body;
    try {
      const res = await createUser({
        name,
        realname,
        password,
        cellphone,
        departmentId,
        roleId,
      });
      console.log("bahahah", res);
      const { id, updatedAt, createdAt, ...result } = res;

      ctx.body = {
        code: 0,
        message: "用户注册成功",
        result,
      };
    } catch (error) {
      // console.error(error);
      console.log(error);
      ctx.app.emit("error", regjsterError, ctx);
    }
  }
}

module.exports = new UserController();
