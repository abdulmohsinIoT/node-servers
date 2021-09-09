'use strict';

const net = require('net');

var app_tcp = net.createServer(function(socket) {
    socket.on('data', function (data) {
        console.log('Receive from client: ' + data);
        socket.write('Hello World (TCP)!\n');
    });
});

module.exports = app_tcp;