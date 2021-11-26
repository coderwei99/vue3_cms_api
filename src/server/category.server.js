const Category = require("../model/category.model");

class CategoryServer {
  // 创建分类
  async create(params) {
    const res = await Category.create(params);
    return res;
  }

  // 删除分类
  async remove(params) {
    const res = await Category.destroy({ where: params });
    return res ? false : true;
  }

  // 更新分类
  async update(params) {
    const { id, ...res } = params;
    const result = await Category.update(res, { where: { id } });
    return result[0] === 0 ? true : false;
  }

  // 查找某个分类
  async findOneCategory(params) {
    const res = await Category.findOne({ where: params });
    return res;
  }

  // 获取分类列表
  async findList(params) {
    const { pageSize, pageNum } = params;
    const offset = (pageNum - 1) * pageSize;
    const { rows, count } = await Category.findAndCountAll({
      offset,
      limit: pageSize,
    });

    return {
      pageSize,
      pageNum,
      count,
      list: rows,
    };
  }
}

module.exports = new CategoryServer();
