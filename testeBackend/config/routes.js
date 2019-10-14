const express = require('express')

const userService = require('../api/users/UserService')
const loginService = require('../api/LoginAuth/LoginService')
const tokenService = require('../api/tokens/TokenService')

module.exports = function(server){

  //Rotas da api
  const router = express.Router()

  userService.register(router, '/userservice')
  loginService.register(router, '/loginservice')
  tokenService.register(router, '/tokenservice')

  server.use('/api', router)

}
