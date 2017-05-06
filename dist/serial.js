"use strict";
exports.__esModule = true;
var five = require("johnny-five");
var Serial = (function () {
    function Serial() {
        this.LEDState = false;
        this._board = null;
        this._board = new five.Board({ port: "COM3" });
        this._board.on("ready", function () {
            var led = new five.Led(13);
        });
    }
    Serial.prototype.REPL = function () {
        this._board.on("ready", function () {
            console.log("Ready event. Repl instance auto-initialized!");
            var led = new five.Led(13);
            this.repl.inject({
                // Allow limited on/off control access to the
                // Led instance from the REPL.
                on: function () {
                    led.on();
                },
                off: function () {
                    led.off();
                }
            });
        });
    };
    Serial.prototype.Send = function () {
        var _this = this;
        this._board.on("ready", function () {
            _this._board.loop(500, function () {
                // Whatever the last value was, write the opposite
                _this._board.digitalWrite(13, _this.LEDState ? 0 : 1);
                _this.LEDState = !_this.LEDState;
            });
        });
    };
    return Serial;
}());
exports.Serial = Serial;
//# sourceMappingURL=serial.js.map