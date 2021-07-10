class Rover {
  // Write code here!
  constructor(position) {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    
    let resultsArr = [];
    let data = { message: message.name, results: resultsArr };
    let passedCommand = { completed: true };
    let failedCommand = { completed: false };

    for (let i = 0; i < message.commands.length; i++) {
      
      let roverCommands = message.commands[i].commandType;
      let roverCommandValue = message.commands[i].value;
      
      if (roverCommands === 'MODE_CHANGE') {
        this.mode = roverCommandValue;
        resultsArr.push(passedCommand);
      } else if (roverCommands === 'MOVE' && this.mode === 'NORMAL') {
        this.position = roverCommandValue;
        resultsArr.push(passedCommand);
      } else if (roverCommands === 'MOVE' && this.mode === 'LOW_POWER') {
        resultsArr.push(failedCommand);
      } else if (roverCommands === 'STATUS_CHECK') {
        resultsArr.push({ 
          completed: true, 
          roverStatus: { 
          mode: this.mode, 
          generatorWatts: this.generatorWatts,  
          position: this.position 
        }
        })
      }
    }
    return data;
  }

}

module.exports = Rover;
// !!!! Use for debugging !!!!
// const Command = require('./command.js');
// const Message = require('./message.js');






