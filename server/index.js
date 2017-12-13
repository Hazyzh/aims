const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

// 根据目录和文件名称 挂载 controllers 下的文件到 router 上面去
const routers = require('./middlewares/controller.js')
// restify api 格式请求处理
const rests = require('./middlewares/rest.js')
// proxy ctx.body
const configBody = require('./middlewares/configBody.js')

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app
  .use(bodyParser())
  .use(configBody())
  .use(rests.restify())
  .use(routers())

app.listen(3000)
