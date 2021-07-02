const Command = require('./command.js');
const Message = require('./message.js');

class Rover {
  // Write code here!
  constructor(position) {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    
      return { 
        message: message.name,
        results: [
      {
         completed: true
      },
      {
         completed: true,
         roverStatus: { mode: this.mode, generatorWatts: this.generatorWatts, position: this.position }
      }
   ] 
      }
    
  }
  
}





module.exports = Rover;

let rover = new Rover(87382098)
let commands = [new Command('STATUS_CHECK')];
let message = new Message('Test message!', commands);
let response = rover.receiveMessage(message);

//console.log(rover.receiveMessage(message));

//console.log(response.results[0]);
// console.log(response.results[1]);


/*
MOVE - 	Number representing the position the rover should move to. 	position 	{completed: true}

STATUS_CHECK - 	No values sent with this command. 	No updates 	{completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}} Values for mode, generatorWatts, position will depend on current state of rover.

MODE_CHANGE - 	String representing rover mode (see modes) 	mode 	{completed: true}


{
   message: 'Test message with two commands',
   results: [
      {
         completed: true
      },
      {
         completed: true,
         roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
      }
   ]
}





*/