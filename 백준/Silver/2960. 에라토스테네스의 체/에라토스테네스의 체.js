const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split(" ").map(Number);

function solution(n) {
  const arr = Array.from({ length: n + 1 }).fill(true);
  arr[0] = arr[1] = false;
  const count = [];

  for (let i = 2; i <= n; i++) {
    if (arr[i] === true) {
      count.includes(arr[i]) ? '' : count.push(i);
      for (let j = 2; i * j <= n; j++) {
        count.includes(i * j) ? '' : count.push(i * j);
        arr[i * j] = false;
      }
    }
  }

  return count[input[1] - 1];
}

console.log(solution(input[0]));
