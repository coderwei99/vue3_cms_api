const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

// 导入控制器的函数
const { register, login } = require("../controller/user.controller");

// 导入中间件
const {
  verifyParams,
  verifyName,
  cryptPassword,
  verifyLoginParams,
  verifyLogin,
} = require("../middleware/user.middleware");

// 用户注册
router.post("/register", verifyParams, verifyName, cryptPassword, register);

// 用户登录
router.post("/", verifyLoginParams, verifyLogin, login);

module.exports = router;
