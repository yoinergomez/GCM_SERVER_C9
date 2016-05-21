var express = require('express'),
path = require('path');

module.exports = function(server) {
  // Install a `/` route that returns server status
  server.use(express.static(path.join(__dirname, '../../client')));
  var router = server.loopback.Router();
  router.get('/status', server.loopback.status());
  server.use(router);
};
