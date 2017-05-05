"use strict";
exports.__esModule = true;
var dgram = require("dgram");
var serial_1 = require("./serial");
function listener() {
    var PORT = 2000;
    var HOST = '192.168.1.255';
    var server = dgram.createSocket('udp4');
    server.on('listening', function () {
        var address = server.address();
        console.log('UDP Server listening on ' + address.address + ':' + address.port);
    });
    server.on('message', function (message, remote) {
        console.log(remote.address + ':' + remote.port + ' - ' + message);
    });
    server.bind(PORT);
}
serial_1.REPL();
