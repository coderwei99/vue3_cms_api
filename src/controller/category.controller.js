const {
  create,
  remove,
  update,
  findOneCategory,
  findList,
} = require("../server/category.server");

const {
  endCreateCategoryError,
  createCategoryError,
  removeCategoryError,
  endRemoveCategoryError,
  updateCategoryError,
  endUpdateCategoryError,
  getOneCategoryError,
  endGetOneCategoryError,
} = require("../config/errorType");
class Category {
  //  新增分类
  async createCategory(ctx) {
    try {
      const res = await create(ctx.request.body);
      if (!res) return ctx.app.emit("error", createCategoryError, ctx);
      ctx.body = {
        code: 0,
        message: "新增分类成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endCreateCategoryError, ctx);
    }
  }

  // 删除分类
  async removeCategory(ctx) {
    try {
      const res = await remove(ctx.request.params);
      if (res) return ctx.app.emit("error", removeCategoryError, ctx);
      ctx.body = {
        code: 0,
        message: "删除分类成功",
        data: null,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endRemoveCategoryError, ctx);
    }
  }

  // 更新分类
  async patchCategory(ctx) {
    try {
      const res = await update({ ...ctx.request.body, ...ctx.request.params });
      if (res) return ctx.app.emit("error", updateCategoryError, ctx);
      ctx.body = {
        code: 0,
        message: "更新分类成功",
        data: null,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endUpdateCategoryError, ctx);
    }
  }

  // 查询单个分类
  async getOneCategory(ctx) {
    try {
      const res = await findOneCategory(ctx.request.params);
      if (!res) return ctx.app.emit("error", getOneCategoryError, ctx);
      ctx.body = {
        code: 0,
        message: "查询分类成功",
        data: res,
      };
    } catch (err) {
      console.error(err);
      ctx.app.emit("error", endGetOneCategoryError, ctx);
    }
  }

  // 获取分类列表
  async getCategoryList(ctx) {
    try {
      const { pageSize = 10, pageNum = 1 } = ctx.request.params;
      const res = await findList({ pageSize, pageNum });
      ctx.body = {
        code: 0,
        message: "获取分类列表",
        data: res,
      };
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new Category();
