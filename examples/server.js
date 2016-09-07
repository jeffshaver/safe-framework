var express = require('express')
var config = require('./config.js')
var compression = require('compression')
var app = express()

app.use(compression())
app.use(express.static('dist'))
app.use(express.static('fonts'))
app.use(express.static('node_modules'))
app.use('config.js', express.static('config.js'))
app.use('lib', express.static('lib'))

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/html/index.html')
})

app.listen(config.port, function () {
  console.log('Listening on port ' + config.port)
})