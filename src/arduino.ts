import * as five from 'johnny-five';
import * as repl from 'repl';

const LED_DURATION = 1000;
const LED_PIN = 13;

export class Arduino {
    public LEDState: boolean = false;
    
    private _board: five.Board = null;
    private _ledONE: five.Pin = null;
    private _ledTWO: five.Pin = null;
    private _ledTHREE: five.Pin = null;
    private _ledTimeout: number = null;

    private _leds: five.Pin[] = [];

    public constructor() {
        this._board = new five.Board({ port: "COM3" });
        this._board.on("ready", () => {
            console.log('connected to arduino');
            this._ledONE = new five.Pin(3);
            this._ledONE.low();
            this._ledTWO = new five.Pin(4);
            this._ledTWO.low();
            this._ledTHREE = new five.Pin(5);
            this._ledTHREE.low();

            this._leds = [this._ledONE, this._ledTWO, this._ledTHREE ];
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
                },
                strobe: () => {
                    led.strobe(500);
                },
                stop: () => {
                    led.stop(500);
                }
            });
        }
    }

    public LED(id: number) {
        if(this._board.isReady)
        {
            this._board.
            this._leds[id].high();

            if(this._ledTimeout)
            {
               clearTimeout(this._ledTimeout);
            }

            setTimeout(() => this._leds[id].low(), LED_DURATION);
        }
    }
}