const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim();

function findZero(n) {
  const mul5 = Math.floor(n / 5); 
  const mul25 =Math.floor(n / 25); 
  const mul125 =Math.floor(n / 125); 
  return mul5 + mul25 + mul125;
}

console.log(findZero(input));