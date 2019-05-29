const UserService = require('./userTask')

UserService.methods(['get', 'post', 'put', 'delete'])
UserService.updateOptions({ new: true })

module.exports = UserService
