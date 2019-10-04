const port = 8080
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

const https = require('https')
const http = require('http')
const fs = require('fs')

server.use(bodyParser.urlencoded({ extend: true }))
server.use(bodyParser.json())

http.createServer({
//  key: fs.readFileSync('./key.pem'),
//  cert: fs.readFileSync('./cert.pem'),
//  passphrase: 'X9gxjujuba'
}, server).listen(port, function(){
  console.log(`Http Backend is running on port ${port}.`)
})

server.use(function(req, res, next){
  next()
})

module.exports = server
