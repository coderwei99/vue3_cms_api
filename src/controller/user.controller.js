// 导入serve的函数
const { createUser } = require("../server/user.server");
const { createUserError } = require("../config/errorType");

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
      const { id, updatedAt, password: npassword, createdAt, ...result } = res;

      ctx.body = {
        code: 0,
        message: "用户注册成功",
        result,
      };
    } catch (error) {
      console.error(error);
      // console.log(ctx);
      createUserError.result = error;
      ctx.app.emit("error", createUserError, ctx);
    }
  }

  // 用户登录
  async login(ctx) {
    const { name, password } = ctx.request.body;
    // console.log(name, password);
    ctx.body = {
      code: 0,
      message: "登录成功",
      result: {
        name,
      },
    };
  }
}

module.exports = new UserController();
