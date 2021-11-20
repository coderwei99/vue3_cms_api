const User = require("../model/users.model");
class UserServer {
  // 创建一个新的用户
  async createUser({
    name,
    realname,
    password,
    cellphone,
    departmentId,
    roleId,
  }) {
    // console.log({ name, realname, password, cellphone, departmentId, roleId });
    const res = await User.create({
      name,
      realname,
      password,
      cellphone,
      departmentId,
      roleId,
    });
    // const { id, updateAt, createAt, ...result } = res;
    return res.dataValues;
  }

  async verifyUserName(ctx, next) {
    const res = await User.findAll({
      where: {
        name: ctx.request.body.name,
      },
    });
    console.log(res);
    return res;
  }
}

module.exports = new UserServer();
