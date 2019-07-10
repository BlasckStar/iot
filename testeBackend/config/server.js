const port = 5000
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

const https = require('https')
const fs = require('fs')

server.use(bodyParser.urlencoded({ extend: true }))
server.use(bodyParser.json())

https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'X9gxjujuba'
}, server).listen(port, '0.0.0.0', function(){
  console.log(`Https Backend is running on port ${port}.`)
})

server.use(function(req, res, next){
  next()
})

module.exports = server
