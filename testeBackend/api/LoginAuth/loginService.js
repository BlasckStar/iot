const LoginService = require('./loginTask')

LoginService.methods(['get', 'post', 'put', 'delete'])
LoginService.updateOptions({ new: true })
LoginService.before('post', verificacao)
//LoginService.before('put', verificacao)

function verificacao(req, res, next){
  LoginService.findOne({username: req.body.username}, function(err, user){
    if(err){
      return res.status(500).send('Falhou')
    }
    if(!user){
      return next()
    }
  })
}

module.exports = LoginService
