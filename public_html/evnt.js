// Import events module
var events = require('events');

var sys = require('sys');
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

var dataRecievedHandler=function(){
    setTimeout(function(){
console.log('data received succesfully.');

console.log("Program Ended.");

},3000);
  
   
}
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', dataRecievedHandler);


// Create an eventEmitter object

// Bind the connection event with the handler
// Fire the connection event 
eventEmitter.emit('connection');
