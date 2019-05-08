let numberOfVowels = function(data) {
  // Put your solution here
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    switch (data.charAt(i)) {
      case "a":
        sum++;
        break;
      case "e":
        sum++;
        break;
      case "i":
        sum++;
        break;
      case "o":
        sum++;
        break;
      case "u":
        sum++;
        break;
      default:
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
