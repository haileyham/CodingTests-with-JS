const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

const tag = input[0].match(/<[a-z0-9 ]+>/g) ?? [];
const word = input[0].split(/<[a-z0-9 ]+>/); 

const reverse = word
  .map(word => word
    .split(' ')
    .map(v => [...v].reverse().join(''))
    .join(' ')
  );
const answer = tag.map((tag, i) => reverse[i] + tag).join('') + reverse[reverse.length - 1];

console.log(answer);