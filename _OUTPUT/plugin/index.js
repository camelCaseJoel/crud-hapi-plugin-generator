'use strict';

const routes = require('./routes.js');

const after = function (server) {
  server.route(routes);
}

exports.plugin = {
  name: 'ikompras-branchSchedule',
  version: '1.0.0',
  register: async function (server, options) {
    server.dependency(['ikompras-util', 'ikompras-db'], after);
  }
}
