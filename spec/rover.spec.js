const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function () {
  // 7 tests here!
    let rover1 = new Rover(150);

  
  it("constructor sets position and default values for mode and generatorWatts", function () {
    expect(rover1.position).toBe(150);
    expect(rover1.mode).toBe("NORMAL")
    expect(rover1.generatorWatts).toBe(110)
  });

  let rover2 = new Rover(150)

  let command1 = new Command("STATUS_CHECK")
  let message1 = new Message("Test Message", [command1])
  let response1 = rover2.receiveMessage(message1)

  it("response returned by receiveMessage contains the name of the message", function () {
    expect(response1.message).toBe("Test Message")
  });

  let command2 = new Command("MOVE", 200)
  let message2 = new Message("Test Message", [command1, command2])
  let response2 = rover2.receiveMessage(message2)
  
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    expect(response2.results).toHaveLength(2);
  });
  
  it("responds with the position for the move command", function() {
    expect(rover2.position).toBe(200)
  })

  it("responds correctly to the status check command", function () {
    expect(response1.results[0].completed).toBe(true)
    expect(response1.results[0].roverStatus.mode).toBe('NORMAL')
    expect(response1.results[0].roverStatus.generatorWatts).toBe(110)
    expect(response1.results[0].roverStatus.position).toBe(150)
  });

  let command3 = new Command("MODE_CHANGE", "LOW_POWER")
  let message3 = new Message("Test Message", [command3])
  let response3 = rover2.receiveMessage(message3)

  it("responds correctly to the mode change command", function () {
    expect(response3.results[0].completed).toBe(true)
  });

  let command4 = new Command("MOVE", 300)
  let message4 = new Message("Test Message", [command4])
  let response4 = rover2.receiveMessage(message4)

  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    expect(response4.results[0].completed).toBe(false)
    expect(rover2.position).not.toBe(300)
  });


});
