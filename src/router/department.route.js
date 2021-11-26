const Router = require("koa-router");

const {
  createdepartment,
  delteDepartment,
  patchDepartment,
  getDepartmentList,
  getOneDepartment,
} = require("../controller/department.controller");
const { validator } = require("../middleware/deparment.middleware");
const { auth } = require("../middleware/auth.middleware");
const { isRole } = require("../middleware/auth.middleware");
const router = new Router({ prefix: "/department" });

// 创建一个部门
router.post("/", auth, isRole, validator, createdepartment);

// 删除一个部门
router.delete("/:id", auth, isRole, delteDepartment);

// 修改部门
router.patch("/:id", auth, isRole, patchDepartment);

// 查找所有部门
router.post("/list", auth, getDepartmentList);

// 查找某个部门
router.get("/:id", auth, getOneDepartment); 

module.exports = router;
