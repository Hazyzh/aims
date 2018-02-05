### the project structure

#### 技术栈

前端基于 `react`,`antd` 组件库构建,内容用 `redux-saga` 管理状态，`redux-router` 生成前端路由。

后端基于 `nodejs` 的 `koa` 框架构建,数据存储使用的 `mysql` 于 `node` 连接使用的
`Sequelize` orm框架。

#### 目录结构

```
- build            📦 打包文件
  - build             正式环境打包文件
  - dev-client        开发环境热加载入口
  - dev-server        开发环境启动文件   
  - theme.js          antd 自定义主题配置文件
  - untils            打包配置使用到的工具
  - webpack.*.js      基础配置和不同环境下的打包配置文件

- config           前端打包配置文件
  - index             打包手动配置文件

- server           服务端文件
  - controllers       控制器主要业务逻辑路对应处理方法
  - middlewares       koa 中间件包括（body上挂载变量，路由配置，spa路由模式兼容，restapi方法挂载）
  - model             Sequelize 定义的一些表模型，统一在index文件下暴露出去
  - timeTasks         定时器相关任务
  - util              服务端用到的一些工具文件
  - index             服务端启动文件
  - watch             服务端监听热更新（直接监听文件内容改变，用pm2重新加载项目）

- src              前端项目文件
  - actions           redux Action Creator文件
  - components        通用组建文件
  - reducers          redux reducer 文件
  - router            react-router 根路由文件
  - sagas             redux-saga 内业务逻辑相关文件
  - store             redux配置文件
  - types             action type 集合文件
  - util              前端通用工具类文件
  - views             不同路由视图文件
  - app               前端入口文件
  
- eslintrc         eslint配置文件 在standard基础上修改
- index.*.html     正式环境和开发环境模版文件，正式环境一些库用的cnd引入   
```
