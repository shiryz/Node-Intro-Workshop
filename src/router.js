var path = require('path');
var fs = require('fs');
var handlers = require('./handlers');

var router = function(request, response) {
  var url = request.url;
  if (url === '/') {
    handlers.handleHomeRoute(request, response);
  } else if (url.indexOf('/public/' !== -1)) {
    handlers.handlePublic(request, response);
  } else {
    response.writeHead(404);
    response.end('Page does not exist');
  }
};

module.exports = router;
