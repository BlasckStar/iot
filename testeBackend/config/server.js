const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extend: true}))
server.use(bodyParser.json())

server.listen(port, function(){
  console.log(`BACKEND is runnnig on port ${port}.`)
})

server.use(function(req, res, next){

  next()
})

module.exports = server
