const LoginService = require('./loginTask')

LoginService.methods(['get', 'post', 'put', 'delete'])
LoginService.updateOptions({ new: true })

module.exports = LoginService
