var five = require("johnny-five");
var board = new five.Board({
    port: "COM5"
});

board.on("ready", function() {
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7,
    freq:1000
  });
  

//   proximity.on("data", function() {
    
//     console.log("Proximity: ");
//     console.log("  cm  : ", this.cm);
//     console.log("  in  : ", this.in);
//     console.log("-----------------");
//   });
var contador = 0;
  proximity.on("change", function() {
    contador++;
    console.log("O número de pessoas é.", contador);
  });
});