import * as five from 'johnny-five';

let board = new five.Board({ port: "COM3" });

board.on("ready", function() {
  // Create an Led on pin 13
  let led = new five.Led(13);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe(100);
});