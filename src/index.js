const app = require("./app");

// 导入端口
const { APP_POST } = require("./config/config.default");

app.use(ctx => {
  ctx.body = "123";
});
app.listen(APP_POST, () => {
  console.log(`http://localhost:${APP_POST}`);
});
