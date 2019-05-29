const express = require('express')

const userService = require('../api/users/UserService')
const loginService = require('../api/LoginAuth/LoginService')

module.exports = function(server){

  //Rotas da api
  const router = express.Router()
 /*
  router.route("/list").get(function(req, res){
    res.json({'nome':"hello world"})
  })

  router.post('/login', function(req, res){
    var username = req.body.username
    var password = req.body.password

    loginService.findOne( {username: username, password: password}, function(err, user){
      if(err){
        console.log(err)
        return res.status(500).send()
      }
      if(!user){
        console.log('meu pau')
        loginService.save()
        return res.status(404).send()
      }
      console.log('meu pai')
      return res.status(200).send()
    })

  })

  router.post('/register', function(req, res){
    var username = req.body.username
    var password = req.body.password
  })

*/
  userService.register(router, '/userservice')
  loginService.register(router, '/loginservice')
  
  server.use('/api', router)

}
