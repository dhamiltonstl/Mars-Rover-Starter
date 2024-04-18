const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function () {
  // 7 tests here!
  let rover = new Rover(98382);
  
  it("constructor sets position and default values for mode and generatorWatts", function () {
    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe("NORMAL")
    expect(rover.generatorWatts).toBe(110)
  });

  it("response returned by receiveMessage contains the name of the message", function () {
    expect(response.message).toBe("Test message with two commands")
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    expect(response.results).toHaveLength(2);
  });

  it("responds correctly to the status check command", function () {
    expect(response.results.roverStatus).toBe(true)
    expect(response.results.roverStatus.mode).toBe('NORMAL')
    expect(response.results.roverStatus.generatorWatts).toBe(110)
    expect(response.results.roverStatus.position).toBe(87382098)
  });

  it("responds correctly to the mode change command", function () {
    expect(response.results.completed).toBe(true)
  });

  // it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {

  // });

});
