const app = require("./app");

// 导入端口
const { APP_POST } = require("./config/config.default");

app.listen(APP_POST, () => {
  console.log(`http://localhost:${APP_POST}`);
});
