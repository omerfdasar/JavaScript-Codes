// user has to enter valid number.

let maximum = parseInt(prompt("Enter the maximum number !"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number !!"));
}
//  It is checked by while loop.

// Below i used math library in order to generate a random number

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess !"));

let attempts = 1;

while (parseInt(guess) !== targetNum) {
  attempts++;
  if (guess === "q") {
    break;
  } else if (guess > targetNum) {
    guess = prompt("Too high, lower your guess and enter a new number");
  } else {
    guess = prompt("Too low, increase your guess and enter a new number");
  }
}
if (guess === "q") {
  console.log("OK. You Quit.");
} else {
  console.log(`You Won!! It took you ${attempts}`);
}
