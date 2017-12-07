### Sequelize 是 mysql 的 ORM 框架, 细节可以参考文档和一些文章

- [Sequelize doc](http://docs.sequelizejs.com/manual/installation/getting-started.html)
- [Sequelize 和 MySQL 对照](https://segmentfault.com/a/1190000003987871)

**下面记录一些常用的操作的写法**

#### 增

```javascript

// 如果配置了 created_at 和 updated_at 字段，会自动更新。
var user = yield User.create({
    'emp_id': '2',
    'nick': '小明',
    'department': '技术部'
})

```

#### 查询

```javascript

/**
 * 查询封装了很多简易的方法 可以加速开发
 * {findAndCountAll} 查询数据并返会总数
 * {findOrCreate} 查询如果不存在就创建
 */
var users = yield User.findAll({
    'attributes': [
        'emp_id', ['nick', 'user_nick']
    ],
    'where': {
      id: [1, 2, 3],
      name: 'asas'
    }
})

```

#### 更新

```javascript

var users = yield User.findAll({
    'attributes': [
        'emp_id', ['nick', 'user_nick']
    ],
    'where': {
      id: [1, 2, 3],
      name: 'asas'
    }
})

```
