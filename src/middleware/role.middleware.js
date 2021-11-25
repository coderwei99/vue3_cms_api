const { departmentParamsError } = require("../config/errorType");

// 验证参数类型
const roleValidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      name: {
        type: "string",
      },
      intro: {
        type: "string",
      },
      menuList: {
        type: "array",
        itemType: "number",
      },
    });
  } catch (err) {
    console.log(err);
    departmentParamsError.data = err.errors;
    return ctx.app.emit("error", departmentParamsError, ctx);
  }
  await next();
};

module.exports = {
  roleValidator,
};
