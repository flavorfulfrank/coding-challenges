//Take a string for parentheses '(', ')', '{', '}', '[' and ']'
//Return true if input string is valid

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
var isValid = function (s) {
  let stack = [];
  let complement = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let char of s) {
    if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== complement[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};
