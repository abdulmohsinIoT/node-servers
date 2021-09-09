'use strict';

const http = require('http');

let app_http = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World (HTTP)!\n');
});

module.exports = app_http;