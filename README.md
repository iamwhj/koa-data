## koa-data

> Koa-data is a node-based cli tool. You can quickly build koa backend service, according to the choice to generate router template and mongoDB database generic operation template. One set of interface to operate multiple tables, just pass the table name dynamically.

### Language

[English](https://github.com/iamwhj/koa-data)
 |
[中文](https://github.com/iamwhj/koa-data/blob/main/README-ZH.md)

### Install

```bash
npm install koa-data -g
```

### Usage and options introduction

1. use

- After the global installation is complete, the command line executes:

```bash
koa-data
```

2. options introduction 
   
-  packageName 
-  port (default 3000)
-  router 
-  mongodb (dataBase)
-  panel (dataView)


### Project startup and configuration

- Go to the generated project directory and execute the command 
```bash
node index.js
```  

> **Attention**: If you want to use the mongodb function interface, please make sure the environment is installed.  
> Config folder is Configuration(Default mogondb port: 27017, Default dataBase: test), Can be modified according to requirements.


### Validation interface and data panel

- Once the project is started, you can use the test interface to verify, address: http://localhost:3000/base/test

- Data debugging panel to perform database CRUD operations.When the dataPanel option is checked, you can access the [dataView](http://localhost:3000)。

#### **Mongodb Operation Interface**:

Default address: http://localhost:3000  

Use the address to spell up the route. As inserted in the interface: http://localhost:3000/base/insert_one

```js
// Insert /base/insert_one
{
  "cname" : "user", // collection
  "doc" : {   // filed
    "name" : "Daw",
    "password" : "123456"
  }
}

// Delete one item by _id /base/delete_one
{
  "cname" : "user", // collection
  "_id" : "5eef0ebea1ddd4ed2446c673"
}
// Delete all in the collection /base/delete_all
{
  "cname" : "user"
}

// Update（replace） /base/replace_one
{
  "cname" : "user", // collection
  "_id" : "5eef0ebea1ddd4ed2446c673",
  "doc" : {
    "name" : "Daw1",
    "password" : "456789"
  }
}

// Query a piece of data by _id /base/find_one
{
  "cname" : "user", // collection
  "_id" : "5eef0ebea1ddd4ed2446c673"
}
// Query multiple data（pagination，filter，projection） /base/find_all
{
  "cname" : "user", // collection
  "page_num" : 1, // First page
  "page_size" : 10, // 10 per page
  "filter": { "name": "Daw" }, // filter name: "Daw"
  "projection" : "name password"  // projection
}
```
**Of course, the interface conditions for querying multiple data are optional and can be left unfilled or optional.**
```json
{
  "cname" : "user"
}
```
<!-- ![过滤分页数据](http://image.dawsky.vip:8081/image/upload_2f06ca93853e7dd4e6a977cd1ccbfff6.jpg) -->

<!-- **不限定条件，返回所有表中数据** -->

<!-- ![查询全部数据](http://image.dawsky.vip:8081/image/upload_77bacead4d2d4d8fbe063174142a268e.jpg) -->


### **Finally**

Welcome to interact. In addition, if this project helps you, I hope you can click a **[star](https://github.com/iamwhj/koa-data)**, thank so much!
