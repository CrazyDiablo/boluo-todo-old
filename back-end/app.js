const { response } = require('express')
const express = require('express')
const { request } = require('http')
const path = require('path')

const app = express()

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// 注册路由
const registerRoutes = (app, routes) => {
    routes.forEach(route => {
        app[route.method](route.path, route.func)
    })
}
// 主页
const routesIndex = require('./routes/index')
registerRoutes(app, routesIndex)
// TODO相关
const routesTODO = require('./routes/todo')
registerRoutes(app, routesTODO)

// 解决跨域
app.options('*', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    response.end()
})

module.exports = app
