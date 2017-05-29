import * as dgram from 'dgram';
import * as arduino from './arduino';

export function listener(srl: arduino.Arduino) {
    let PORT = 2000;

    let server = dgram.createSocket('udp4');

    server.on('listening', function () {
        let address = server.address();
        console.log('UDP Server listening on ' + address.address + ':' + address.port);
    });

    server.on('message', function (message: number, remote) {
        console.log(remote.address + ':' + remote.port + ' - ' + message);
        srl.LED(message);
    });

    server.bind(PORT);
}