module.exports = {
  // -----------------------------------------------------------------前端错误-----------------------------------------

  // 用户错误：100xx
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
  updateUserInfoError: {
    code: "10009",
    message: "不能在这个接口修改用户密码",
    data: null,
  },

  // 权限错误：101xx
  isRoleError: {
    code: "10101",
    message: "没有权限进行该操作",
    data: null,
  },

  // 部门模块:102xx
  departmentParamsError: {
    code: "10201",
    message: "请检查参数",
    data: null,
  },
  deletePartmentError: {
    code: "10202",
    message: "删除部门失败",
    data: null,
  },

  // -----------------------------------------------------------------后端错误-----------------------------------------
  // 用户模块：200xx
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
  // 部门模块：202xx
  EnddeleteDepartmentError: {
    code: "20201",
    message: "删除部门错误",
    data: null,
  },
};
