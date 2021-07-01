const { response } = require('express')
const fs = require('fs')

const todo = {}

const readDB = (dbPath) => {
    let options = {
        encoding: 'utf-8'
    }
    let data = fs.readFileSync(dbPath, options)
    data = JSON.parse(data)
    return data
}

const writeDB = (dataList, dbPath) => {
    let data = JSON.stringify(dataList, null, 2)
    fs.writeFileSync(dbPath, data)
}

todo.dataPath = 'db/todo.json'

todo.all = () => {
    let todoData = readDB(todo.dataPath)
    todoData = JSON.stringify(todoData)
    return todoData
}
// 默认只添加单个对象 push处理
todo.add = (todoItem) => {
    let path = todo.dataPath
    let todoList = readDB(path)
    let lastIndex = todoList.length - 1
    let lastId = todoList[lastIndex].id

    todoItem.id = lastId + 1
    todoList.push(todoItem)
    writeDB(todoList, path)
    return '添加成功'
}

todo.update = (todoItem) => {
    let path = todo.dataPath
    let todoList = readDB(path)
    let resStr = '修改失败 未找到该todo'

    // 根据id替换对应todo 的属性值
    todoList.forEach(item => {
        if (item.id === todoItem.id) {
            for (const key in todoItem) {
                if (Object.hasOwnProperty.call(item, key)) {
                    item[key] = todoItem[key]
                }
            }
            writeDB(todoList, path)
            resStr = '修改成功'
            return
        }
    })
    return resStr
}

todo.delete = (todoId) => {
    let path = todo.dataPath
    let todoList = readDB(path)

    for (let i = 0; i < todoList.length; i++) {
        let todoItem = todoList[i]
        if (todoItem.id === todoId) {
            todoList.splice(i, 1)
            writeDB(todoList, path)
            return '删除成功'
        }
    }
    return '删除失败 未找到该todo'
}


module.exports = todo