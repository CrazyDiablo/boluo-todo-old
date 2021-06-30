const { response } = require('express')
const fs = require('fs')

const todo = {}

const readDB = (dbPath) => {
    let options = {
        encoding: 'utf-8'
    }
    let data = fs.readFileSync(dbPath, options)
    return data
}

const writeDB = (data, dbPath) => {
    fs.writeFileSync(dbPath, data)
}

todo.dataPath = 'db/todo.json'

todo.all = () => {
    let todoData = readDB(todo.dataPath)
    return todoData
}
// 默认只添加单个对象 push处理
todo.add = (todoItem) => {
    let canAdd = true
    let path = todo.dataPath
    let todoData = readDB(path)
    let todoList = JSON.parse(todoData)
    todoList.forEach(item => {
        if (item.id === todoItem.id) {
            canAdd = false
        } 
    })
    if (canAdd) {
        todoList.push(todoItem)
        todoData = JSON.stringify(todoList, null, 2)
        writeDB(todoData, path)
        return '添加成功'
    } else {
        return 'id重复 非法操作'
    }
}

todo.update = (todo) => {

}

todo.delete = (todoId) => {

}


module.exports = todo