const fs = require('fs')

let todoData = fs.readFileSync('db/todo.json', {encoding: 'utf-8'})
console.log(typeof(todoData))