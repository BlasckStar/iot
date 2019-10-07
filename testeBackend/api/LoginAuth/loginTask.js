const restful = require('node-restful')
const mongoose = restful.mongoose

const loginSchema = new mongoose.Schema({
  username:{ type: String, require: true},
  password:{ type: String, required: true},
  email:{ type: String, required: true},
})
module.exports = restful.model('loginTask', loginSchema)
