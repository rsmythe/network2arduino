import * as five from 'johnny-five';
import * as repl from 'repl';
let board = new five.Board({ port: "COM3" });

let LEDState: boolean = false;

export function Send(data) {
    board.on("ready", function() {
        board.loop(500, function() {
            // Whatever the last value was, write the opposite
            board.digitalWrite(13, LEDState ? 0 : 1);
            LEDState = !LEDState;
        });
    });
}

export function REPL(){
    board.on("ready", function() {
        console.log("Ready event. Repl instance auto-initialized!");

        let led = new five.Led(13);

        this.repl.inject({
            // Allow limited on/off control access to the
            // Led instance from the REPL.
            on: function() {
                led.on();
            },
            off: function() {
                led.off();
            }
        });
    });
}