const Goods = require("../model/goods.model");

class GoodsServer {
  // 创建商品
  async createGood(params) {
    const res = await Goods.create(params);
    return res;
  }

  // 删除商品
  async removeGood(params) {
    const res = await Goods.destroy({ where: params });
    return res;
  }

  // 更新商品
  async changeGood(params) {
    const { id, ...res } = params;
    const result = await Goods.update(res, {
      where: {
        id,
      },
    });

    return result[0] === 0 ? true : false;
  }

  // 查找单个商品
  async findGood(params) {
    console.log(params);
    const res = await Goods.findOne({ where: params });
    return res;
  }

  // 查找商品列表
  async findGoodsList(params) {
    const { pageSize = 10, pageNum = 1 } = params;
    const offset = (pageNum - 1) * 10;
    const { rows, count } = await Goods.findAndCountAll({
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

module.exports = new GoodsServer();
