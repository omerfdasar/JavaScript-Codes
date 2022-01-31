function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Not an operator..";
  }
}

var number1;
var number2;
var operation;

while (true) {
  operation = prompt('Type an operation symbol"+,-,*,/" or type "e" for exit');
  if (operation == "e") {
    break;
  }
  number1 = +prompt("Number1: ");
  number2 = +prompt("Number2: ");
  console.log(calculator(number1, number2, operation));
  break;
}
