var app = require('express').createServer();
app.get("/string", function(req, res) {
  var strings = ["rad", "bla", "ska"]
  var n = Math.floor(Math.random() * strings.length)
  res.send(strings[n])
})
app.listen(8001)