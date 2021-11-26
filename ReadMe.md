# 基于 node+Koa+mysql 实现后台管理 API 接口

## 错误类型

错误码由五位数构成，第一个数字表示前端还是后端错误，第二和第三位数字表示那个模块，第四和第五位表示具体的错误信息编号（见 config->erorType 文件）

例如：10001：表示错误属于前端的错误，用户注册模块的编号为 01 的错误

| 第一位的数字含义 |          |
| ---------------- | -------- |
| 1                | 前端错误 |
| 2                | 后端错误 |

| 第二和第三位的数字含义 |          |
| :--------------------- | -------- |
| 00                     | 用户模块 |
| 01                     | 权限模块 |
| 02                     | 部门模块 |
| 03                     | 菜单模块 |
| 04                     | 角色模块 |
| 05                     | 商品模块 |
| 06                     | 分类模块 |

## 实现功能

### 用户模块

1. 用户登录
2. 用户注册
3. 删除用户
4. 修改面膜
5. 修改用户信息
6. 获取用户列表

### 部门模块

1. 创建部门
2. 删除部门
3. 修改部门
4. 获取某个部门
5. 获取部门列表

### 角色模块

1. 新增角色
2. 删除角色
3. 修改角色
4. 获取某个角色
5. 获取角色列表

### 菜单模块

1. 新增菜单
2. 删除菜单
3. 修改菜单
4. 获取某个菜单
5. 获取菜单列表

### 商品信息模块

1. 创建商品
2. 删除商品
3. 更新商品
4. 获取某个商品
5. 获取商品列表

### 商品分类模块

1. 创建分类
2. 删除分类
3. 更新分类
4. 查询某个分类
5. 查询分类列表



