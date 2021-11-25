const Router = require("koa-router");

const { auth, isRole } = require("../middleware/auth.middleware");
const {
  createRole,
  deleteRole,
  patchRole,
  getOneRole,
  getRoleList,
} = require("../controller/role.controller");
const { roleValidator } = require("../middleware/role.middleware");
const router = new Router({ prefix: "/roles" });

// 新增角色
router.post("/", auth, isRole, roleValidator, createRole);

// 删除角色
router.delete("/:id", auth, isRole, deleteRole);

// 更新角色
router.patch("/:id", auth, isRole, patchRole);

// 查询某个角色
router.get("/:id", auth, isRole, getOneRole);

// 查询角色列表
router.post("/list", auth, isRole, getRoleList);

module.exports = router;
