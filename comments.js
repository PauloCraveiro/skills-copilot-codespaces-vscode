// create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response) {
  var url_parts = url.parse(request.url);
  var path = url_parts.pathname;

  switch(path) {
    case '/':
      fs.readFile('index.html', function(error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
      });
      break;
    case '/comments':
      if (request.method == 'POST') {
        var body = '';
        request.on('data', function(data) {
          body += data;
        });
        request.on('end', function() {
          var post = qs.parse(body);
          console.log(post);
          response.writeHead(200, { 'Content-Type': 'text/plain' });
          response.end('You posted:\n\n' + post.comment);
        });
      } else {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello, World!');
      }
      break;
    default:
      response.writeHead(404);
      response.end('Not Found');
      break;
  }
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');