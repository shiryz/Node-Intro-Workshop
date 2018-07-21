var path = require('path');
var fs = require('fs');

var handleHomeRoute = function(request, response) {
  var filePath = path.join(__dirname, '../public', '/index.html');
  fs.readFile(filePath, function(error, file) {
    if (error) {
      response.writeHead(500, 'Content-Type: text/html');
      response.end('<h1>Sorry, something went wrong</h1>');
    }
    response.writeHead(200, 'Content-Type: text/html ');
    response.end(file);
  });
};

var handlePublic = function(request, response) {
  var extensionType = {
    css: 'text/css',
    html: 'text/html',
    js: 'application/javascript',
    ico: 'image/x-icon'
  };
  var extension = request.url.split('.')[1];
  var filePath = path.join(__dirname, '..', request.url);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      response.writeHead(404, 'Content-Type: text/html');
      response.end('<h1>The file you requested does not exist</h1>');
    }
    response.writeHead(200, { 'Content-Type': extensionType[extension] });
    response.end(file);
  });
};

module.exports = {
  handlePublic,
  handleHomeRoute
};
