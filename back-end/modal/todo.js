const fs = require('fs')

const todo = {}

const readDB = (dbPath) => {
    let options = {
        encoding: 'utf-8'
    }
    let data = fs.readFileSync(dbPath, options)
    return data
}

todo.dataPath = 'db/todo.json'

todo.all = () => {
    let todoData = readDB(todo.dataPath)
    return todoData
}

todo.add = (todoList, path) => {
    
    // let path = 'db/todo.json'
    // let todoData = fs.readFileSync(path, {encoding: 'utf-8'})
    // todoData.push(todoList)
    // fs.writeFile(path, todoData)
}

todo.update = (todo) => {

}

todo.delete = (todoId) => {

}


module.exports = todo