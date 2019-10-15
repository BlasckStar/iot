const TokenService = require('./tokenTask')

TokenService.methods(['get', 'post', 'put', 'delete'])
TokenService.updateOptions({ new: true })
TokenService.before('post', verifique)

function verifique(req, res, next){
  TokenService.findOne({token: req.body.token}, function(err, user){
    if(err){
      return res.status(500).send('Falhou')
    }
    if(!user){
      return res.status(200).next()
    }else{
      return res.status(403).send('Usuario já existe')
    }
  })
}
module.exports = TokenService
