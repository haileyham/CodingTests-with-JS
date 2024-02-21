const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

const stack = [];
const result = [];

let index = 0;

for (let i = 1; i < input.length; i++) {
  const target = parseInt(input[i]);
  while (index < target) {
    index++;
    stack.push(index);
    result.push('+');
  }
  if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push('-');
  } else {
    console.log('NO');
    process.exit(0);
  }
}

console.log(result.join('\n'));