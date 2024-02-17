const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split(" ").map(Number);

const [N, M] = [input[0], input[1]];
function div5(n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count
}
function div2(n) {
  let count = 0;
  for (let i = 2; i <= n; i *= 2) {
    count += Math.floor(n / i);
  }
  return count;
}

const reuslt5 = div5(N) - div5(M) - div5(N - M);
const reuslt2 = div2(N) - div2(M) - div2(N - M);

console.log(Math.min(reuslt2, reuslt5));