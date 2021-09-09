'use strict';

const http_server = require('./http-server');
const tcp_server = require('./tcp-server');
const udp_server = require('./udp-server');
const ws_server = require('./ws-server');

http_server.listen(3000, '127.0.0.1');
console.log('Node HTTP server running on port 3000');

tcp_server.listen(4000, '127.0.0.1');
console.log('Node TCP server running on port 4000');

udp_server.bind(5000, '127.0.0.1');
console.log('Node UDP server running on port 5000');

// ws_server.listen(6000);
// console.log('Node Websocket server running on port 6000');