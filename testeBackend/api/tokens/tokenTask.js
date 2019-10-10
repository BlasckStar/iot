const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
  user:{type: String, required: false}
})

const tokenSchema = new mongoose.Schema({
  token:{type: String, require: true}
  users:[userSchema]
})

module.exports = tokenSchema
