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
    try {
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
    } catch (error) {
      console.error(error, "roo");
    }
  }

  // 查找用户
  async verifyUserName(name) {
    const res = await User.findOne({
      where: {
        name,
      },
    });
    return res;
  }
}

module.exports = new UserServer();
