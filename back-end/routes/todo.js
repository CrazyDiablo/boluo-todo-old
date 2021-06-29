const todo = require('../modal/todo')

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
    func: (request, response) => {
        console.log('post')
        console.log('request', request.body)
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