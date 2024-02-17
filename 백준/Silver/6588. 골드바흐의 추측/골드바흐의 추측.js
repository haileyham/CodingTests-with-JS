const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n").map(Number);

const findMax = Math.max(...input);
const arr = Array.from({ length: findMax + 1 }).fill(true);
arr[0] = arr[1] = false;
const sqrt = parseInt(Math.sqrt(findMax));

for (let i = 2; i <= sqrt; i++) {
  if (arr[i] === true) {
    for (let j = 2; i * j <= findMax; j++) {
      arr[i * j] = false;
    }
  }
}

let result = "";
input.map((x) => {
  for (let i = 3; i < x; i += 2) {
    if (arr[i] && arr[x - i]) {
      result += `${x} = ${i} + ${x - i}\n`;
      break;
    }
  }
});
console.log(result);