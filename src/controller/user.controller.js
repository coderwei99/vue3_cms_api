// 导入jsonwebtoken 给用户颁发token
const JWT = require("jsonwebtoken");

// 导入serve的函数
const {
  createUser,
  verifyUserName,
  updateByid,
  delteUserByid,
  getUsersList,
} = require("../server/user.server");

// 导入错误类型
const {
  createUserError,
  deleteUserError,
  updatePasswordError,
  EnddeleteUserError,
  updateUserInfoError,
} = require("../config/errorType");

// 导入tkoen秘钥
const { JWT_SECRET } = require("../config/config.default");
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
      const { id, updatedAt, password: npassword, createdAt, ...data } = res;

      ctx.body = {
        code: 0,
        message: "用户注册成功",
        data,
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
    const { name } = ctx.request.body;
    const { password, createdAt, updatedAt, ...res } = await verifyUserName({
      name,
    });
    console.log(res);
    ctx.body = {
      code: 0,
      message: "登录成功",
      data: {
        token: JWT.sign(res, JWT_SECRET, { expiresIn: "1d" }),
      },
    };
  }

  // 修改密码
  async changePassword(ctx) {
    const { id } = ctx.state.user;
    const { password } = ctx.request.body;
    try {
      const res = await updateByid({ id, password });
      console.log(res, "res");
      if (res[0] == 0) return ctx.app.emit("error", updatePasswordError, ctx);
      ctx.body = { code: 0, message: "修改密码成功", data: null };
    } catch (err) {
      console.error(err, "error");
      // ctx.app.emit("error");
    }
  }

  // 修改用户信息
  async changeUserInfo(ctx) {
    const changeParams = ctx.request.body;
    // const id = ctx
    // console.log(ctx.request.params);
    if (changeParams.password)
      return ctx.app.emit("error", updateUserInfoError, ctx);
    const res = await updateByid({ ...changeParams, ...ctx.request.params });
    ctx.body = {
      code: 0,
      message: "修改用户成功",
      data: 0,
    };
  }

  // 删除用户
  async deleteUser(ctx) {
    const { id } = ctx.state.user;
    try {
      console.log(haha);
      const res = await delteUserByid({ id });
      if (!res) return ctx.app.emit("error", deleteUserError, ctx);
      ctx.body = {
        code: 0,
        message: "删除用户成功",
        data: null,
      };
    } catch (error) {
      console.error("error", error);
      return ctx.app.emit("error", EnddeleteUserError, ctx);
    }
  }

  // 获取用户列表
  async getUserList(ctx) {
    const { pageSize = 10, pageNum = 1 } = ctx.request.query;
    try {
      const res = await getUsersList({ pageNum, pageSize });
      ctx.body = {
        code: 0,
        message: "获取用户列表成功",
        data: res,
      };
    } catch (err) {
      console.log("getUserList函数", err);
    }
  }
}

module.exports = new UserController();
