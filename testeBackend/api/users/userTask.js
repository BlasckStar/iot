const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({

  name: { type: String, required: true },
  age: { type: Number, required: false }

})

const roomSchema = new mongoose.Schema({

  name: { type: String, required:true },
  users: [userSchema]

})

module.exports = restful.model('userTask', roomSchema)
