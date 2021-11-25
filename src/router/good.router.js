const Router = require("koa-router");

const { auth, isRole } = require("../middleware/auth.middleware");
const {
  createGood,
  deleteGood,
  patchGood,
  getOneGood,
  getGoodsList,
} = require("../controller/goods.controller");

const router = new Router({ prefix: "/goods" });

// 创建商品
router.post("/", auth, isRole, createGood);

// 删除商品
router.delete("/:id", auth, isRole, deleteGood);

// 更新商品
router.patch("/:id", auth, isRole, patchGood);

// 查找某个商品
router.get("/:id", auth, isRole, getOneGood);

// 查找商品列表
router.post("/list", auth, isRole, getGoodsList);

module.exports = router;
