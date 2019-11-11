const haveTodo = require('./havetodo')

haveTodo.methods(['get', 'post', 'put', 'delete'])
haveTodo.updateOptions({ new: true, runValidators: true })

module.exports = haveTodo
