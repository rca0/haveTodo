// Create middleware

module.exports = function(req, res, next) {
    res.headers('Access-Control-Allow-Origin', '*')
    res.headers('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.headers('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}
