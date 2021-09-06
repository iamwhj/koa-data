## koa-data

> koa-data是一个基于node的cli工具，可以快速搭建koa后台服务，可选择生成router模板和mongoDB数据库通用操作模板，一套接口操作多个表，动态传递表名即可，使开发者更方便进行后台开发和调试。

### 安装

```bash
npm install koa-data -g
```

### 使用和配置介绍

1. 使用

- 全局安装完成后，执行命令:

```bash
koa-data
```

2. 配置介绍  
   
-  packageName 项目名称
-  port 端口（默认3000）
-  router 路由
-  mongodb 数据库插件和通用接口
-  panel 数据调试面板


### 项目启动和配置

- 进入生成的项目目录，执行命令 node index.js  

> **注意**：若想使用mongodb功能接口，请确保环境已安装**mongodb**。  
> config文件是配置文件(默认mogondb端口：27017，数据库：test)，可以根据需求自行修改。


### 验证接口和调试面板

- 项目启动后，可以使用测试接口验证，地址：http://localhost:3000/base/test

- 数据调试面板，可以进行数据库CRUD操作，勾选上dataPanel选项时，即可访问[调试面板](http://localhost:3000)。

#### **mongodb操作接口**：

默认地址：http://localhost:3000  

使用时用地址拼上路由，如插入接口：http://localhost:3000/base/insert_one

```js
// 插入 /base/insert_one
{
  "cname" : "user", // 表名
  "doc" : {   // 字段
    "name" : "Daw",
    "password" : "123456"
  }
}

// 指定id删除表中一项 /base/delete_one
{
  "cname" : "user", // 表名
  "_id" : "5eef0ebea1ddd4ed2446c673"
}
// 删除表中全部项 /base/delete_all
{
  "cname" : "user"
}

// 更新（准确来说应该是替换） /base/replace_one
{
  "cname" : "user", // 表名
  "_id" : "5eef0ebea1ddd4ed2446c673",
  "doc" : {
    "name" : "Daw1",
    "password" : "456789"
  }
}

// 根据id查询一条数据 /base/find_one
{
  "cname" : "user", // 表名
  "_id" : "5eef0ebea1ddd4ed2446c673"
}
// 查询多条数据（可分页，过滤，筛选响应字段） /base/find_all
{
  "cname" : "user", // 表名
  "page_num" : 1, // 第一页
  "page_size" : 10, // 每页10条
  "filter": { "name": "Daw" }, // 过滤name: "Daw"
  "projection" : "name password"  // 查询结果只返回这两字段
}
```
**当然了查询多条数据的接口条件时可选的，可以不填或选填，如下即是返回所有**
```json
{
  "cname" : "user"
}
```
<!-- ![过滤分页数据](http://image.dawsky.vip:8081/image/upload_2f06ca93853e7dd4e6a977cd1ccbfff6.jpg) -->

<!-- **不限定条件，返回所有表中数据** -->

<!-- ![查询全部数据](http://image.dawsky.vip:8081/image/upload_77bacead4d2d4d8fbe063174142a268e.jpg) -->


### **最后**

欢迎互动，另外这个项目帮助到你的话，希望你可以顺手点个 **[star](https://github.com/iamwhj/koa-data)**，感谢！
