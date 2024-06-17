const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split(" ").map(Number);

function prime(n) {
  const maxNum = n[1];
  const arr = Array.from({ length: maxNum + 1 }).fill(true);
  arr[0] = arr[1] = false;
  const sqrt = parseInt(Math.sqrt(maxNum));

  for (let i = 2; i <= sqrt; i++) {
    if (arr[i] === true) {
      for (let j = 2; i * j <= maxNum; j++) {
        arr[i * j] = false;
      }
    }
  }

  return arr.map((v, i) => v ? i : -1).filter((i) => i !== -1 && i >= n[0]);
}

const answer = prime(input).join("\n");
console.log(answer);