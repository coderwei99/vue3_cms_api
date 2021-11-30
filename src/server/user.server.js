const User = require("../model/users.model");
const { handleLike } = require("../utils/handleLike");
const Role = require("../model/role.model");

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
      console.log(roleId);
      const res = await User.create({
        name,
        realname,
        password,
        cellphone,
        departmentId,
      });
      const _Role = await Role.findOne({ where: { id: roleId } });
      await res.setRole(_Role);
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
    const res = User.update(info, { where: { id } });
    return res;
  }

  //根据id删除数据库的用户
  async delteUserByid({ id }) {
    const res = await User.destroy({
      where: {
        id,
      },
    });
    return res !== 0 ? true : false;
  }

  // 查询单个用户
  async findOneUserInfo(params) {
    console.log(params);
    const res = await User.findOne({
      where: { id: "4" },
      attributes: { exclude: ["password"] },
    });
    const role = await res.getRole();
    return { ...res.dataValues, role };
  }
  // 查询用户列表
  async getUsersList(params) {
    const {
      pageSize = 10,
      pageNum = 1,
      name,
      id,
      realname,
      departmentId,
      cellphone,
      roleId,
      createdAt,
      updatedAt,
    } = params;
    let whereOpt = {};
    id && Object.assign(whereOpt, { id });
    name && Object.assign(whereOpt, { name });
    realname && Object.assign(whereOpt, { realname });
    departmentId && Object.assign(whereOpt, { name });
    cellphone && Object.assign(whereOpt, { cellphone });
    roleId && Object.assign(whereOpt, { roleId });
    createdAt && Object.assign(whereOpt, { createdAt });
    updatedAt && Object.assign(whereOpt, { updatedAt });

    const offset = (pageNum - 1) * pageSize;
    whereOpt = handleLike(whereOpt);
    console.log(whereOpt, "res");

    const { rows, count } = await User.findAndCountAll({
      where: whereOpt,
      offset,
      limit: pageSize * 1,
      attributes: { exclude: ["password"] },
    });
    console.log(rows);
    return {
      pageSize,
      pageNum,
      list: rows,
      count,
    };
  }
}

module.exports = new UserServer();
