const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim();

function countCutPieces(input) {
  const stack = [];
  let cutPieces = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      stack.push(i);
    } else {
      const top = stack.pop();
      if (top + 1 === i) {
        cutPieces += stack.length;
      } else {
        cutPieces++;
      }
    }
  }

  return cutPieces;
}

console.log(countCutPieces(input));