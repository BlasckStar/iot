const restful = require('node-restful')
const mongoose = restful.mongoose

const employeeSchema = new mongoose.Schema({
  name:{ type: String, require: true},
  email:{ type: String, require: true},
  hierarchy:{ type: String, require: true,
  enum:['Makro','Fatec','Usuario','Visitante']},
  password:{ type: String, require: true},
  description:{ type: String, require: true}
})

module.exports = restful.model('employeeTask', employeeSchema)
