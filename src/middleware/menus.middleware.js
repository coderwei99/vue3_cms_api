const { departmentParamsError } = require("../config/errorType");

// 验证参数类型
const menuValidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      name: {
        type: "string",
      },
      type: {
        type: "number",
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
  menuValidator,
};
