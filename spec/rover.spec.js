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
  // //Test 8
  it("response returned by receiveMessage contains name of message", function() {
    let message = new Message('Test message!');
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual(message.name);
  });
  // // Test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message!', commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(message.commands.length);
  });
  // Test 10
  it("responds correctly to status check command", function() {
    let rover = new Rover(87382098)
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Test message!', commands);
    let response = rover.receiveMessage(message);
    expect(response.results[0]).toEqual({completed: true});
    expect(response.results[1]).toEqual({ completed: true, roverStatus: { mode: 'NORMAL', generatorWatts: 110,  position: 87382098 }});
  });

  //Test 11
    it("responds correctly to mode change command", function() {

    });
  // Test 12
    // "responds with false completed value when attempting to move in LOW_POWER mode".
  // Test 13
    // "responds with position for move command".

});


/*
"responds correctly to mode change command".

  The test should check the completed property and rover mode for accuracy.
  The rover has two modes that can be passed a values to a mode change command, 'LOW_POWER' and 'NORMAL'.




*/

