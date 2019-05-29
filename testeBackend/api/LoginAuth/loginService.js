const LoginService = require('./loginTask')

LoginService.methods(['get', 'post', 'put', 'delete'])
LoginService.updateOptions({ new: true })
KiranCycle.before('post', verificacao)

function verificacao(req, res, next){
  KiranCycle.findOne({salaAtual: req.body.salaAtual}, function(err, user){
    if(err){
      return res.status(500).send('Falhou')
    }if(!user){
      return next()
      //return res.status(404).send(next())
    }
    return res.status(200).send('Ja existe')
  })
}

module.exports = LoginService
