const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

function isGoodWord(word) {
  const stack = [];
  for (let i = 0; i < word.length; i++) {
    const current = word[i];
    const top = stack[stack.length - 1];
    if (top === current) {
      stack.pop();
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
}

let count = 0;
for (let i = 1; i <= input[0]; i++) {
  if (isGoodWord(input[i])) {
    count++;
  }
}

console.log(count);
