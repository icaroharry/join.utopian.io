'use strict';

const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');

const server = Hapi.Server({
  port: 3000
});

const start = async () => {
  await server.register(Vision);
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return h.file('./dist/home/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist'
      }
    }
  });

  await server.start();
  console.log('Server running at:', server.info.uri);
};

start();