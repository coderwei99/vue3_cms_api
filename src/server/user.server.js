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
  async verifyUserName({ name }) {
    const res = await User.findOne({
      where: {
        name,
      },
    });
    return res ? res.dataValues : null;
  }

  // 根据id更新数据库中某个数据
  async updateByid({ id, name, realname, password, departmentId, cellphone }) {
    let info = {};
    name && Object.assign(info, { name });
    realname && Object.assign(info, { realname });
    password && Object.assign(info, { password });
    departmentId && Object.assign(info, { departmentId });
    departmentId && Object.assign(info, { departmentId });
    cellphone && Object.assign(info, { cellphone });

    console.log(info);
    const res = User.update(info, { where: { id } });
    return res[0] === 0 ? false : true;
  }

  //根据id删除数据库的用户
  async delteUserByid({ id }) {
    const res = await User.destroy({
      where: {
        id,
      },
    });
    console.log(res);
    return res;
  }
}

module.exports = new UserServer();
