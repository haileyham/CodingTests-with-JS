const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const num = new Map();
const name = new Map();

for (let i = 1; i <= N; i++) {
  const poketmonName = input[i];
  num.set(poketmonName, i);
  name.set(i, poketmonName);
}

const answer = [];
for (let i = N + 1; i < input.length; i++) {
  const query = input[i];
  if (isNaN(query)) {
    answer.push(num.get(query));
  } else {
    answer.push(name.get(Number(query)));
  }
}

console.log(answer.join(`\n`))

