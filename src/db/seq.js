const { Sequelize } = require("sequelize");

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_HOST_PASSWORD,
  MYSQL_HOST_DB,
} = require("../config/config.default");

const seq = new Sequelize(MYSQL_HOST_DB, MYSQL_USER, MYSQL_HOST_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

// 测试连接数据库
seq
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch(err => {
    console.log("数据库连接失败", err);
  });
