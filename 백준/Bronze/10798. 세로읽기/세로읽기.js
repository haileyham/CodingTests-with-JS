const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

function readVertically(words) {
  let result = '';
  const maxLength = Math.max(...words.map(word => word.length));

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[j][i]) {
        result += words[j][i];
      }
    }
  }

  return result;
}

console.log(readVertically(input));