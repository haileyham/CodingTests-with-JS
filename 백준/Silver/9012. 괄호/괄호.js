const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");
input.shift();

const stack = [];

for (let i = 0; i < input.length; i++) {
  const string = input[i]; 
  let balanced = true;

  for (let j = 0; j < string.length; j++) {
    const char = string[j];
    if (char === '(') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        balanced = false;
        break;
      }
      stack.pop();
    }
  }

  if (stack.length !== 0 || !balanced) {
    console.log('NO');
  } else {
    console.log('YES');
  }

  stack.length = 0;
}