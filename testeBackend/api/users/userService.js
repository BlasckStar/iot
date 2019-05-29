const UserService = require('./userTask')

UserService.methods(['get', 'post', 'put', 'delete'])
UserService.updateOptions({ new: true })
UserService.before('post', verificacao)

function verificacao(req, res, next){
  UserService.findOne({name: req.body.name}, function(err, user){
    if(err){
      return res.status(500).send('Falhou')
    }if(!user){
      return next()
      //return res.status(404).send(next())
    }
    return res.status(200).send('Ja existe')
  })
}

module.exports = UserService
