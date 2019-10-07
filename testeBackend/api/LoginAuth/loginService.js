const LoginService = require('./loginTask')

LoginService.methods(['get', 'post', 'put', 'delete'])
LoginService.updateOptions({ new: true })
LoginService.before('post', verificacao)
LoginService.before('delete', deleteCheck)

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

function loginCheck(req, res, next){
  LoginService.findOne({username: req.body.username}, function(err, user){
    if(err){
      return res.status(500).send('Falhou')
    }if(!user){
      return res.status(200).next()
    }
    return res.status(200).send('Ja existe')
  })
}

function deleteCheck(req, res, next){
  res.send('got  a Delete request at /user')
  return res.status(200).next()
}
module.exports = LoginService
