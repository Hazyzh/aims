### koa-router 配置

设置了 `controller` 中间件控制器, 启动时候自动获取 `controller` 目录下的文件。文件都会暴露出一个对象，即对应不同的 `method` 以及对应的 `handler`, 该文件的目录就是改接口的地址。比如 `controller/login.js` 挂载到 `router` 的对应地址就是 `/login`。

### restify api 设置

设置了 `rest` 中间件， 对 `router` 对应目录 `/api/v1` 下的请求做判断，如果没有 `token` 或者 `token` 失效则返回 `401`，如果请求成功则在 `ctx` 的 `userInfo` 键上注入解析到的 `userInfo` 内容。 `token` 创建使用的是 `jsonwebtoken`
