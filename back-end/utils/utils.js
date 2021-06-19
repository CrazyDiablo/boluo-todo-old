const { response } = require("express")
const fs = require('fs')

const sendHtml = (response, pageName) => {
    let options = {
        encoding: 'utf-8',
    }
    let path = 'views/' + pageName
    fs.readFile(path, options, (error, data) => {
        response.send(data)
    })
}

module.exports = { sendHtml }