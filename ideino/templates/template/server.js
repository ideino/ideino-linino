var linino = require('ideino-linino-lib'),
    board = new linino.Board();

var pin13 = board.pin.digital.D13,
    ctrl = true;
    
board.connect( function(){
    board.pinMode(pin13, board.MODES.OUTPUT);
    
    setInterval(function(){
        if(ctrl){
            board.digitalWrite(pin13, board.HIGH);
            ctrl = false;
        }
        else{
            board.digitalWrite(pin13, board.LOW);
            ctrl = true;
        }
    },1000);
});