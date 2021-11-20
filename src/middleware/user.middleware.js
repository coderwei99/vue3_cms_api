// 导入错误类型
const { regjsterError, regjsterNameError } = require("../config/errorType");

// 导入server层的函数
const { verifyUserName } = require("../server/user.server");

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
  const res = await verifyUserName(ctx, next);
  if (res.length === 0) {
    // 继续执行
    return next();
  } else {
    // 抛出错误
    ctx.app.emit("error", regjsterNameError, ctx);
  }
};
module.exports = {
  verifyParams,
  verifyName,
};
