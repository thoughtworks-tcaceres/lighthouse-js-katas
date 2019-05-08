const multiplicationTable = function(maxValue) {
  // Your code here
  var msg = "";

  for (var i = 0; i < maxValue; i++) {
    for (var j = 0; j < maxValue; j++) {
      msg += (i + 1) * (j + 1);
      if (j !== maxValue - 1) {
        msg += " ";
      }
    }
    msg += "\n";
  }
  return msg;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
