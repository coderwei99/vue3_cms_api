const { departmentParamsError } = require("../config/errorType");

const validator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      name: {
        type: "string",
      },
      leader: {
        type: "string",
      },
      parentId: {
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
  validator,
};
