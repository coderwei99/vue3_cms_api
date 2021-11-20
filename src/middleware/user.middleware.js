const bcrypt = require("bcryptjs");
const { emit } = require("nodemon");

// 导入错误类型
const {
  regjsterError,
  regjsterNameError,
  userInexistenceError,
  userPasswordError,
} = require("../config/errorType");

// 导入server层的函数
const { verifyUserName } = require("../server/user.server");

// 密码加密
const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash;
  await next();
};

// 检验参数是否合法：用户名密码电话那些不能为空
const verifyParams = async (ctx, next) => {
  let { name, realname, password, cellphone, departmentId, roleId } =
    ctx.request.body;
  // 对name进行删除空格处理，避免前端穿了一堆空格进来
  name = name.trim();
  if (!(name && realname && password && cellphone && departmentId && roleId))
    return ctx.app.emit("error", regjsterError, ctx);
  await next();
};

// 检验参数是否合理：这里主要指用户名不能出现重复的
const verifyName = async (ctx, next) => {
  const { name } = ctx.request.body;
  const res = await verifyUserName(name);
  if (res) return ctx.app.emit("error", regjsterNameError, ctx);
  return next();
};

// 检验用户登录参数是否合法
const verifyLoginParams = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (!(name && password)) return ctx.app.emit("error", regjsterError, ctx);
  await next();
};

// 对用户的密码进行校验
const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  // 1. 判断用户是否存在
  const res = await verifyUserName(name);
  console.log(res);
  if (!res) {
    return ctx.app.emit("error", userInexistenceError, ctx);
  }
  // 2. 判断用户输入的密码是否正确
  if (bcrypt.compareSync(password, res.password)) return await next();
  ctx.app.emit("error", userPasswordError, ctx);
};
module.exports = {
  verifyParams,
  verifyName,
  cryptPassword,
  verifyLoginParams,
  verifyLogin,
};
