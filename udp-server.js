'use strict';

const dgram = require('dgram');
const app_udp = dgram.createSocket('udp4');

app_udp.on('message', (msg, rinfo) => {
    console.log('Receive from client: ' + msg);
    app_udp.send("Hello World (UDP)!\n", rinfo.port, rinfo.address);
});

module.exports = app_udp;