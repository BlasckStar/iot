const express = require('express')

const userService = require('../api/users/UserService')
const loginService = require('../api/LoginAuth/LoginService')

module.exports = function(server){

  //Rotas da api
  const router = express.Router()

  userService.register(router, '/userservice')
  loginService.register(router, '/loginservice')

  server.use('/api', router)

}
