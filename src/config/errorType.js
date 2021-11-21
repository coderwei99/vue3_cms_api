module.exports = {
  // 前端错误

  //用户注册缺少部分参数
  regjsterError: {
    code: "10001",
    message: "请检查参数",
    data: null,
  },
  //用户名重复
  regjsterNameError: {
    code: "10002",
    message: "用户名重复",
    data: null,
  },
  userInexistenceError: {
    code: "10003",
    message: "用户不存在",
    data: null,
  },
  userPasswordError: {
    code: "10004",
    message: "密码错误",
    data: null,
  },
  TokenExpiredError: {
    code: "10005",
    message: "tokten已过期",
    data: null,
  },
  JsonWebTokenError: {
    code: "10006",
    message: "无效的token",
    data: null,
  },
  updatePasswordError: {
    code: "10007",
    message: "修改密码失败",
    data: null,
  },
  deleteUserError: {
    code: "10008",
    message: "删除用户失败",
    data: null,
  },

  isRoleError: {
    code: "10101",
    message: "没有权限修改用户数据",
    data: null,
  },

  // 后端错误
  createUserError: {
    code: "20001",
    message: "创建用户错误",
    data: null,
  },
  EnddeleteUserError: {
    code: "20002",
    message: "删除用户错误",
    data: null,
  },
};
