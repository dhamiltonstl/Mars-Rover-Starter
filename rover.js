class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      let output = {
         message: message.name,
         results: []
      }
      for (let i of message.commands) {
         if (i.commandType === "STATUS_CHECK") {
            output.results.push({
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position
               }
            })
         } else if (i.commandType === "MODE_CHANGE") {
            this.mode = i.value
            output.results.push({
               completed: true
            })
         } else if (i.commandType === "MOVE") {
            this.position = i.value
            output.results.push({
               completed: true
            })
         }
      }
      return output
   };
};

module.exports = Rover;