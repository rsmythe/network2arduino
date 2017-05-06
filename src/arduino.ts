import * as five from 'johnny-five';
import * as repl from 'repl';

export class Arduino {
    public LEDState: boolean = false;
    
    private _board: five.Board = null;
    private _led: five.Led = null;

    public constructor() {
        this._board = new five.Board({ port: "COM3" });
        this._board.on("ready", () => {
            this._led = new five.Led(13);
            this._led.off();
        });
    }

    public REPL() {
        if(!this._board.isReady)
        {
            this._board.on("ready", () => {
                this.REPL();       
            });
        }
        else
        {
            console.log("Ready event. Repl instance auto-initialized!");

            let led = new five.Led(13);
            
            this._board.repl.inject({
                // Allow limited on/off control access to the
                // Led instance from the REPL.
                on: () => {
                    led.on();
                },
                off: () => {
                    led.off();
                }
            });
        }
    }

    public ToggleLED() {
        if(this._board.isReady)
        {
            this._led.toggle();
        }
    }
}