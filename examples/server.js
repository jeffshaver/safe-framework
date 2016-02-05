var express = require('express')
var app = express()

app.use(express.static('dist'))
app.use(express.static('node_modules'))
app.use('config.js', express.static('config.js'))
app.use('lib', express.static('lib'))

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/html/index.html')
})

app.listen(5000, function () {
  console.log('Listening on port 5000')
})