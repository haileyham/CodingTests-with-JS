const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

const answer = [...input[1].toString()].reduce((a, b) => a + parseInt(b), 0);

console.log(answer);