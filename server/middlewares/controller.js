const fs = require('fs')
const node_path = require('path')
const Router = require('koa-router')
const router = new Router()

/**
 * 挂载对应方法到对应路由上
 * @param {object} router    [router]
 * @param {object} mapping   获取到的文件处理事件对象
 * @param {string} routerKey 控制器的相对路径 直接作为 router
 */
const addMapping = (router, mapping, routerKey) => {
  routerKey = routerKey.substring(0, routerKey.length - 3)
  for (let i in mapping) {
    const method = i.toLowerCase()
    // console.log(`register URL mapping: ${method} ${routerKey}`)
    router[method](routerKey, mapping[i])
  }
}

/**
 * 添加路由 dir 目录下所有 js 文件都解析，根据暴露出的方式 添加对应的路由
 * @param {object} router                 koa-router
 * @param {String} [dir='../controllers'] 解析路径
 */
const addControllers = (router, dir) => {
  const files = fs.readdirSync(node_path.resolve(__dirname, dir))

  /**
   * 循环查找控制器里面的每一个文件 如果文件名称是以 .js 结尾的，则以改目录作为 router 的 key,
   * 文件暴露的方法作为 router 的 hanlder ,加载内容到 router 上。
   * @param  {array} list     文件数组
   * @param  {string} basePath 每次的相对于 controllers 的路径
   */
  const parserBody = (list, basePath) => {
    list.forEach(f => {
      if (f.endsWith('.js')) {
        const mapping = require(node_path.resolve(__dirname, dir, basePath, f))
        const routerKey = node_path.resolve('/', basePath, f)
        addMapping(router, mapping, routerKey)
      } else {
        const innerFiles = fs.readdirSync(node_path.resolve(__dirname, dir, basePath, f))
        parserBody(innerFiles, node_path.join(basePath, f))
      }
    })
  }

  parserBody(files, './')
}

module.exports = (dir = '../controllers') => {
  addControllers(router, dir)
  return router.routes()
}
