const { departmentParamsError } = require("../config/errorType");

const validator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      name: {
        type: "string",
        required: true,
      },
      leader: {
        type: "string",
        required: true,
      },
      // name:{
      //   type:'string',
      //   required: true
      // },
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
