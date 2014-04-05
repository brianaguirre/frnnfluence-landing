var http = require('http');

var name = document.getElementById('name').value;
console.log(name );

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(name);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');