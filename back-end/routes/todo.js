const fs = require('fs')

const todoList = {
    path: '/todoList',
    method: 'get',
    func: (request, response) => {
        let path = 'db/todo.json'
        fs.readFile(path, (error, data) => {
            response.send(data)
        })
    }
}
const addTodo = {
    path: '/addTodo',
    method: 'post',
    func: (request, response) => {
        request.on('data', (data) => {
            // JSON.parse(data)
            // TODO post数据加到DB中
            console.log('data', data.toString())
        })
    }
}

const routes = [
    todoList,
    addTodo,
]

module.exports = routes