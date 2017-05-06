"use strict";
exports.__esModule = true;
var arduino = require("./arduino");
var udp = require("./udp");
//wifi.setup();
//wifi.connect();
var srl = new arduino.Arduino();
udp.listener(srl);
srl.REPL();
//# sourceMappingURL=network2serial.js.map