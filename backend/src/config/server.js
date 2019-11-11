const port = 3000

const bodyParser = require('body-parser')
const express = require('express') // chain of responsability
const server = express()

server.use(bodyParser.urlencoded({ extented: true }))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`[Server] running in port: ${port}`)
})
