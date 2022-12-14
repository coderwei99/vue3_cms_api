const Department = require("../model/department.model");

const { handleLike } = require("../utils/handleLike");
class DepartmentServer {
  // 创建一个部门
  async create({ name, parentId, leader }) {
    const res = await Department.create({ name, parentId, leader });
    return res;
  }

  // 查询部门
  async findDepartment({ id, name, leader }) {
    const info = {};
    console.log(name, leader);
    id && Object.assign(info, { id });
    name && Object.assign(info, { name });
    leader && Object.assign(info, { leader });
    console.log(info);
    const res = Department.findOne({
      where: info,
    });
    return res;
  }

  // 删除部门
  async deleteDepartment({ id }) {
    const res = await Department.destroy({ where: { id } });
    return res ? true : false;
  }

  // 修改部门
  async update({ name, parentId, id, leader }) {
    console.log({ name, parentId, leader });
    const res = await Department.update(
      { name, parentId, leader },
      {
        where: { id },
      }
    );
    return res[0] === 0 ? true : false;
  }

  // 查找部门列表
  async getDepartmentsList(params) {
    const { pageSize, pageNum, name, parentId, leader, createdAt, updatedAt } =
      params;
    let whereOpt = {};
    name && Object.assign(whereOpt, { name });
    parentId && Object.assign(whereOpt, { parentId });
    leader && Object.assign(whereOpt, { leader });
    createdAt && Object.assign(whereOpt, { createdAt });
    updatedAt && Object.assign(whereOpt, { updatedAt });
    whereOpt = handleLike(whereOpt);
    console.log(whereOpt);
    const offset = (pageNum - 1) * 10;
    const { count, rows } = await Department.findAndCountAll({
      where: whereOpt,
      limit: pageSize,
      offset,
    });
    return {
      count,
      list: rows,
      pageSize,
      pageNum,
    };
  }

  // 查找某个部门
  async getOneDement({ id }) {
    const res = await Department.findOne({
      where: {
        id,
      },
      // attributes: ["id", "name", "parentId"],
    });
    return res;
  }
}

module.exports = new DepartmentServer();
