const EmployeeService = require('./employeeTask')

EmployeeService.methods(['get', 'post', 'put', 'delete'])
EmployeeService.updateOptions({ new: true })
EmployeeService.before('post', verificarUsuario)

function verificarUsuario(req, res, next){
  EmployeeService.findOne({name: req.body.name}, function(err, user){
    if(err){
      return res.status(500).send(err)
    }
    if(!user){
      return next()
    }else{
      return res.status(202).send('Usuario já existe')
    }
  })
}

module.exports = EmployeeService
