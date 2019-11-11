const haveTodo = require('./havetodo')

haveTodo.method(['get', 'post', 'put', 'delete'])
haveTodo.updateOptions({ new: true, runValidators: true })

module.exports = haveTodo
