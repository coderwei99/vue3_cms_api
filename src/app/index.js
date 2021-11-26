// 导入第三方库
const Koa = require("koa");
const koaBody = require("koa-body");
const parameter = require("koa-parameter");

const userRouter = require("../router/user.route");
const departmentRouter = require("../router/department.route");
const menusRouter = require("../router/menus.route");
const roleRouter = require("../router/role.router");
const goodsRouter = require("../router/good.router");
const categoryRouter = require("../router/category.router");
// 导入自己定义的
const handleError = require("./handleError");

const app = new Koa();
app.use(koaBody());
app.use(parameter(app));
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(departmentRouter.routes()).use(departmentRouter.allowedMethods());
app.use(menusRouter.routes()).use(menusRouter.allowedMethods());
app.use(roleRouter.routes()).use(roleRouter.allowedMethods());
app.use(goodsRouter.routes()).use(goodsRouter.allowedMethods());
app.use(categoryRouter.routes()).use(categoryRouter.allowedMethods());

app.on("error", handleError);
module.exports = app;
