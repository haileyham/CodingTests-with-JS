const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split('\n');

const n = parseInt(input[0]);
const postfixExpression = input[1].trim();
const operandValues = input.slice(2).map(Number); 

const stack = [];

for (let i = 0; i < postfixExpression.length; i++) {
  const token = postfixExpression[i];

  if (/[A-Z]/.test(token)) {
    const operandIndex = token.charCodeAt(0) - 'A'.charCodeAt(0);
    stack.push(operandValues[operandIndex]);
  } else {
    const operand2 = stack.pop();
    const operand1 = stack.pop();

    switch (token) {
      case '+':
        stack.push(operand1 + operand2);
        break;
      case '-':
        stack.push(operand1 - operand2);
        break;
      case '*':
        stack.push(operand1 * operand2);
        break;
      case '/':
        stack.push(operand1 / operand2);
        break;
    }
  }
}

console.log(stack[0].toFixed(2));