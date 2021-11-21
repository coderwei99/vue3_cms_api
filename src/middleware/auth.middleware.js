const JWT = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/config.default");
const { isRoleError } = require("../config/errorType");
const { TokenExpiredError, JsonWebTokenError } = require("../config/errorType");

const auth = async (ctx, next) => {
  try {
    let { authorization } = ctx.request.header;
    if (!authorization) return ctx.app.emit("error", JsonWebTokenError, ctx);
    authorization = authorization.replace("Bearer ", "");
    const user = JWT.verify(authorization, JWT_SECRET);
    ctx.state.user = user;
    await next();
  } catch (err) {
    console.log(err.name);
    switch (err.name) {
      case "TokenExpiredError":
        ctx.app.emit("error", TokenExpiredError, ctx);
        break;
      case "JsonWebTokenError":
        ctx.app.emit("error", JsonWebTokenError, ctx);
        break;
    }
  }
};

const isRole = async (ctx, next) => {
  const { roleId } = ctx.state.user;
  // console.log(roleId);
  if (!roleId) return ctx.app.emit("error", isRoleError, ctx);
  await next();
};
module.exports = {
  auth,
  isRole,
};
