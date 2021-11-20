const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

// 导入控制器的函数
const { register } = require("../controller/user.controller");

// 导入中间件
const { verifyParams, verifyName } = require("../middleware/user.middleware");
// 用户注册
router.post("/register", verifyParams, verifyName, register);

module.exports = router;
