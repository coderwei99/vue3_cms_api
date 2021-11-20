// 导入第三方库
const Koa = require("koa");
const koaBody = require("koa-body");
const router = require("../router/user.route");

// 导入自己定义的
const handleError = require("./handleError");

const app = new Koa();
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

app.on("error", handleError);
module.exports = app;
