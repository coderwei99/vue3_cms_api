const {
  createGood,
  removeGood,
  changeGood,
  findGood,
  findGoodsList,
} = require("../server/goods.server");
const {
  endCreateGoodsError,
  endRemoveGoodsError,
  createGoodsError,
  removeGoodsError,
  patchGoodsError,
  endPatchGoodsError,
  endGetRoleError,
  getGoodsError,
} = require("../config/errorType");

class GoodsController {
  // 创建商品
  async createGood(ctx) {
    try {
      const res = await createGood(ctx.request.body);
      if (!res) return ctx.app.emit("error", createGoodsError, ctx);
      ctx.body = {
        code: 0,
        message: "创建商品成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endCreateGoodsError, ctx);
    }
  }

  //删除商品
  async deleteGood(ctx) {
    try {
      const res = await removeGood(ctx.request.params);
      if (!res) return ctx.app.emit("error", removeGoodsError, ctx);
      ctx.body = {
        code: 0,
        message: "删除商品成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endRemoveGoodsError, ctx);
    }
  }

  // 更新商品
  async patchGood(ctx) {
    try {
      const id = ctx.request.params;
      const res = await changeGood({ ...id, ...ctx.request.body });
      if (res) return ctx.app.emit("error", patchGoodsError, ctx);
      ctx.body = {
        code: 0,
        message: "修改商品成功",
        data: null,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endPatchGoodsError, ctx);
    }
  }

  // 查找单个商品
  async getOneGood(ctx) {
    try {
      const res = await findGood(ctx.request.params);
      if (!res) return ctx.app.emit("error", getGoodsError, ctx);
      ctx.body = {
        code: 0,
        message: "查找商品成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endGetRoleError, ctx);
    }
  }

  // 查找商品列表
  async getGoodsList(ctx) {
    try {
      const res = await findGoodsList(ctx.request.body);
      ctx.body = {
        code: 0,
        message: "查找商品成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endGetRoleError, ctx);
    }
  }

  // 查询每个分类商品的个数
  async getCategoryCount(ctx) {}
}

module.exports = new GoodsController();
