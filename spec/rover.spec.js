const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // 7 tests here!
  //Test 7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);
    expect(rover.generatorWatts).toEqual(110);
    expect(rover.mode).toEqual('NORMAL');
  });
  //Test 8
  it("response returned by receiveMessage contains name of message", function() {
    let commands = new Command('STATUS_CHECK');
    let message = new Message('Test message!', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual('Test message!');
  });
  // Test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message!', commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(message.commands.length);
  });
  // Test 10
  it("responds correctly to status check command", function() {
    let rover = new Rover(87382098);
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Test message!', commands);
    let response = rover.receiveMessage(message);
    expect(response.results[0]).toEqual({ completed: true, roverStatus: { mode: 'NORMAL', generatorWatts: 110, position: 87382098 }});
  });
  // Test 11
  it("responds correctly to mode change command", function() {
    let rover = new Rover(520);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Test 11 - Change to low power status', commands);
    let response = rover.receiveMessage(message);
    expect(rover.mode).toEqual('LOW_POWER');
  });
  // Test 12
  it("responds with false completed value when attempting to move in LOW_POWER mode", function() {
    let rover = new Rover(520);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 20)];
    let message = new Message('Test 11 - Change to low power status', commands);
    let response = rover.receiveMessage(message);
    expect(response.results[1].completed).toEqual(false);
  });
  // Test 13
    it("responds with position for move command",function() {
      let rover = new Rover(520);
      let commands = [new Command('MOVE', 420)];
      let message = new Message('Rover likes to move it move it', commands);
      let response = rover.receiveMessage(message);
      expect(rover.position).toEqual(420);
    })

});



