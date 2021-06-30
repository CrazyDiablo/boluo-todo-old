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
// 仅支持JSON 数据 TODO完善
const bodyParse = async (request) => {
    let data = []
    await request.on('data', (chunk) => {
        let strData = chunk.toString('utf-8')
        // 第一次解析 去掉转义字符/
        data = JSON.parse(strData)
        // 第二次解析 转换为对象/数组
        data = JSON.parse(data)
    })
    return data
}

module.exports = { 
    sendHtml,
    bodyParse
}