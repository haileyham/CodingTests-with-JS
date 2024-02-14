const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

const num = input[0];
const file = {};
const answer = [];

for (let i = 1; i < input.length; i++) {
  const extension = input[i].match(/[^.]+$/)[0];
  file[extension] = (file[extension] || 0) + 1;
}

const sortedFile = Object.keys(file).sort();

for (let format of sortedFile) {
  answer.push(`${format} ${file[format]}`);
}

console.log(answer.join('\n'));