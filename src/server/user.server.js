const User = require("../model/users.model");
const { handleLike } = require("../utils/handleLike");
const Role = require("../model/role.model");
const Department = require("../model/department.model");
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
      const _Role = await Role.findOne({ where: { id: roleId } });
      const department = await Department.findOne({
        where: { id: departmentId },
      });
      if (!_Role || !department) {
        return null;
      }
      const res = await User.create({
        name,
        realname,
        password,
        cellphone,
        departmentId,
      });
      await res.setRole(_Role);
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
  async updateByid({ id, name, realname, roleId, departmentId, cellphone }) {
    let info = {};
    name && Object.assign(info, { name });
    realname && Object.assign(info, { realname });
    roleId && Object.assign(info, { roleId });
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
    const res = await User.findOne({
      where: params,
      attributes: { exclude: ["password"] },
    });
    if (!res) return null;
    const role = await res.getRole();
    const department = await Department.findOne({
      where: { id: res.departmentId },
    });
    return { ...res.dataValues, role, department };
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
