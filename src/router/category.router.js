const Router = require("koa-router");

const {
  createCategory,
  removeCategory,
  patchCategory,
  getOneCategory,
  getCategoryList,
} = require("../controller/category.controller");
const { auth, isRole } = require("../middleware/auth.middleware");

const router = new Router({ prefix: "/category" });

// 新增分类
router.post("/", auth, isRole, createCategory);

// 删除分类
router.delete("/:id", auth, isRole, removeCategory);

//更新分类
router.patch("/:id", auth, isRole, patchCategory);

// 查询单个分类
router.get("/:id", auth, isRole, getOneCategory);

// 查询分类列表
router.post("/list", auth, isRole, getCategoryList);
module.exports = router;
