const squareCode = function(message) {
  // Put your solution here
  message = message.replace(/ /g, "").split("");
  var msgOuterArray = [];
  var msgInnerArray = [];
  var messageOutput = "";
  var length = message.length;
  var numCols = Math.ceil(Math.sqrt(length));
  var numRows = Math.ceil(length / numCols);

  for (var i = 0; i < numRows; i++) {
    msgInnerArray = [];
    for (var j = 0; j < numCols; j++) {
      if (message[i * numCols + j]) {
        msgInnerArray.push(message[i * numCols + j]);
      }
    }
    msgOuterArray.push(msgInnerArray);
  }

  for (var i = 0; i < numCols; i++) {
    for (var j = 0; j < numRows; j++) {
      if (msgOuterArray[j][i]) {
        messageOutput += msgOuterArray[j][i];
      }
    }
    messageOutput += " ";
  }

  return messageOutput;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
