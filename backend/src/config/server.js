const port = 3000

const bodyParser = require('body-parser')
const express = require('express') // chain of responsability
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extented: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`[Server] running in port: ${port}`)
})

module.exports = server
