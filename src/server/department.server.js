const Department = require("../model/department.model");

class DepartmentServer {
  // 创建一个部门
  async create({ name, leader }) {
    const res = await Department.create({ name, leader });
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
}

module.exports = new DepartmentServer();
