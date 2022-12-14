const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

// 导入控制器的函数
const {
  register,
  login,
  changePassword,
  deleteUser,
  changeUserInfo,
  getUserList,
  getOneUserInfo,
} = require("../controller/user.controller");

// 导入中间件
const {
  verifyParams,
  verifyName,
  cryptPassword,
  verifyLoginParams,
  verifyLogin,
} = require("../middleware/user.middleware");
const { auth, isRole } = require("../middleware/auth.middleware");

// 用户注册
router.post("/register", verifyParams, verifyName, cryptPassword, register);

// 用户登录
router.post("/login", verifyLoginParams, verifyLogin, login);

// 修改密码
router.patch("/", auth, cryptPassword, changePassword);

// 修改用户信息
router.patch("/:id", auth, isRole, changeUserInfo);

// 删除用户
router.delete("/", auth, isRole, deleteUser);

// 获取单个用户
router.get("/:id", auth, getOneUserInfo);

// 获取所有用户
router.post("/", auth, getUserList);

module.exports = router;
