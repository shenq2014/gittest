var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('hello');
}).listen(8000);
console.log('localhost:8000');