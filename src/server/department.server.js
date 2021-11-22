const Department = require("../model/department.model");

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
}

module.exports = new DepartmentServer();
