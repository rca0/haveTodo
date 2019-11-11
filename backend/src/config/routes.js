const express = require('express')

module.exports = function(server) {
    // Create Route
    const router = express.Router()
    server.use('/v1/api', router)

    // Register Routes
    const haveTodoService = require('../api/havetodo/havetodoService')
    haveTodoService.register(router, '/todos')
}
