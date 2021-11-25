const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

const Goods = seq.define("goods", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "商品名字",
  },
  oldPrice: {
    type: DataTypes.INTEGER,
    comment: "商品旧价格",
  },
  newPrice: {
    type: DataTypes.INTEGER,
    comment: "商品新价格",
  },
  desc: {
    type: DataTypes.STRING,
    comment: "商品描述",
  },
  status: {
    type: DataTypes.BOOLEAN,
    comment: "商品状态",
  },
  imgUrl: {
    type: DataTypes.STRING,
    comment: "商品地址",
  },
  inventoryCount: {
    type: DataTypes.INTEGER,
    comment: "商品名字",
  },
  saleCount: {
    type: DataTypes.INTEGER,
    comment: "商品出售数量",
  },
  favorCount: {
    type: DataTypes.INTEGER,
    comment: "商品收藏数量",
  },
  address: {
    type: DataTypes.STRING,
    comment: "商品地址",
  },
});

// Goods.sync({ force: true });
module.exports = Goods;
