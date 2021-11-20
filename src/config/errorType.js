module.exports = {
  // 前端错误
  //用户注册缺少部分参数
  regjsterError: {
    code: "10001",
    message: "请检查参数",
    result: null,
  },
  //用户名重复
  regjsterNameError: {
    code: "10002",
    message: "用户名重复",
    result: null,
  },
  userInexistenceError: {
    code: "10003",
    message: "用户不存在",
    result: null,
  },
  userPasswordError: {
    code: "10004",
    message: "密码错误",
    result: null,
  },

  // 后端错误
  createUserError: {
    code: "20001",
    message: "创建用户错误",
    result: null,
  },
};
