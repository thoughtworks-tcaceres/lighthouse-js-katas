let prompt = require("prompt-sync")();

// code below (replace this example)
console.log("Guess a number between 1 and 10.");
var correctNum = Math.floor(Math.random() * 11);
var guess = false;
var count = 0;

const answered = function(number, correctNumber) {
  let guess = null;
  let end = false;
  if (number > correctNumber) {
    guessDirection = "higher";
  } else if (number < correctNumber) {
    guessDirection = "lower";
  } else if (number == correctNumber) {
    guessDirection = "correct";
    end = true;
  } else {
    guessDirection = "invalid";
  }
  const response = [
    `You answered ${number}. Your guess is ${guessDirection}.`,
    end
  ];

  return response;
};

while (!guess) {
  let answer = prompt("What is your guess? ");
  let response = answered(answer, correctNum);

  if (response[1]) {
    guess = true;
  }
  console.log(response[0]);
}
