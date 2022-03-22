let brackets = {
  ")": "(",
  "}": "{",
  "]": "[",
};


function regularBracketsSequence2(b) {
  var stack = [];

  for (var i = 0; i < b.length; i++) {
    if (b[i] === "(" || b[i] === "[" || b[i] === "{") {
      stack.push(b[i]);
    } else if (
      (b[i].length > 0 && b[i] === ")" && stack[stack.length - 1] === "(") ||
      (b[i] === "]" && stack[stack.length - 1] === "[") ||
      (b[i] === "}" && stack[stack.length - 1] === "{")
    ) {
      stack.pop();
    }
  }
  console.log(stack);
}
regularBracketsSequence2(`{ [ ( ] ) }`);
