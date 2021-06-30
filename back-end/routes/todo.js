const todo = require('../modal/todo')
const { bodyParse } = require('../utils/utils')

const allTodo = {
    path: '/api/todo/all',
    method: 'get',
    func: (request, response) => {
        let data = todo.all()
        response.setHeader('Access-Control-Allow-Origin', '*')
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        response.setHeader('Content-Type', 'application/json')
        response.send(data)
    }
}
// 请求类型 文本 json formdata 
const addTodo = {
    path: '/api/todo/add',
    method: 'post',
    func: async (request, response) => {
        // response.setHeader('Access-Control-Allow-Origin', '*')
        // response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        // response.setHeader('Content-Type', 'application/json')
        let data = await bodyParse(request)
        response.send(JSON.stringify(data))
    }
}

const updateTodo = {
    path: '/api/todo/update',
    method: 'post',
    func: (request, response) => {

    }
}

const deleteTodo = {
    path: '/api/todo/delete',
    method: 'post',
    func: (request, response) => {

    }
}

const routes = [
    allTodo,
    addTodo,
    updateTodo,
    deleteTodo,
]

module.exports = routes