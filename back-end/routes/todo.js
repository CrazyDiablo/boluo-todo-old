const todo = require('../modal/todo')
const { bodyParse } = require('../utils/utils')

const allTodo = {
    path: '/api/todo/all',
    method: 'get',
    func: (request, response) => {
        let data = todo.all()
        response.send(data)
    }
}

const addTodo = {
    path: '/api/todo/add',
    method: 'post',
    func: async (request, response) => {
        let data = await bodyParse(request)
        let resStr = todo.add(data)
        response.send(resStr)
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