const TokenService = require('./tokenTask')

TokenService.methods(['get', 'post', 'put', 'delete'])
TokenService.updateOptions({ new: true})

module.exports = TokenService
