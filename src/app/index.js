// 导入第三方库
const Koa = require("koa");
const koaBody = require("koa-body");
const parameter = require("koa-parameter");

const userRouter = require("../router/user.route");
const departmentRouter = require("../router/department.route");

// 导入自己定义的
const handleError = require("./handleError");

const app = new Koa();
app.use(koaBody());
app.use(parameter(app));
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(departmentRouter.routes()).use(departmentRouter.allowedMethods());

app.on("error", handleError);
module.exports = app;
