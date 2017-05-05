import * as dgram from 'dgram';
import * as readline from 'readline';

import { REPL } from './serial';

function listener() {
    let PORT = 2000;
    let HOST = '192.168.1.255';

    

    let server = dgram.createSocket('udp4');

    server.on('listening', function () {
        let address = server.address();
        console.log('UDP Server listening on ' + address.address + ':' + address.port);
    });

    server.on('message', function (message, remote) {
        console.log(remote.address + ':' + remote.port + ' - ' + message);
    });

    server.bind(PORT);
}

REPL();