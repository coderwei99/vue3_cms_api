const Router = require("koa-router");

const {
  createMenu,
  deleteMenu,
  patchMenu,
  getOneMenu,
  getAllMenus,
} = require("../controller/menus.controller");
const { auth, isRole } = require("../middleware/auth.middleware");
const { menuValidator } = require("../middleware/menus.middleware");

const router = new Router({ prefix: "/menus" });
// 新增菜单
router.post("/", auth, isRole, menuValidator, createMenu);

// 删除菜单
router.delete("/:id", auth, isRole, deleteMenu);

// 修改菜单
router.patch("/:id", auth, isRole, patchMenu);

// 查询某个菜单
router.get("/:id", auth, getOneMenu);

// 查询所有菜单
router.post("/list", auth, getAllMenus);
module.exports = router;
