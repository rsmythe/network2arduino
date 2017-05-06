import * as readline from 'readline';
import * as arduino from './arduino';
import * as wifi from './wifi';
import * as udp from './udp';

//wifi.setup();
//wifi.connect();
let srl: arduino.Arduino = new arduino.Arduino();
udp.listener(srl);
srl.REPL();