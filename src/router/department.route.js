const Router = require("koa-router");

const { createdepartment } = require("../controller/department.controller");
const { auth } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/deoarment.middleware");
const router = new Router({ prefix: "/department" });

// 创建一个部门
router.post("/", auth, validator, createdepartment);

module.exports = router;
