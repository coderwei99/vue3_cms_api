const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

// 导入控制器的函数
const {
  register,
  login,
  changePassword,
  deleteUser,
} = require("../controller/user.controller");

// 导入中间件
const {
  verifyParams,
  verifyName,
  cryptPassword,
  verifyLoginParams,
  verifyLogin,
} = require("../middleware/user.middleware");
const { auth } = require("../middleware/auth.middleware");

// 用户注册
router.post("/register", verifyParams, verifyName, cryptPassword, register);

// 用户登录
router.post("/", verifyLoginParams, verifyLogin, login);

// 修改密码
router.patch("/", auth, cryptPassword, changePassword);

// 删除用户
router.delete("/", auth, deleteUser);
module.exports = router;
