const Router = require("koa-router");

const {
  createdepartment,
  delteDepartment,
} = require("../controller/department.controller");
const { validator } = require("../middleware/deoarment.middleware");
const { auth } = require("../middleware/auth.middleware");
const { isRole } = require("../middleware/auth.middleware");
const router = new Router({ prefix: "/department" });

// 创建一个部门
router.post("/", auth, validator, createdepartment);

// 删除一个部门
router.delete("/:id", auth, isRole, delteDepartment);

module.exports = router;
