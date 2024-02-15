const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split(" ").map(Number);

const GCD = (num1, num2) => (num2 > 0 ? GCD(num2, num1 % num2) : num1);
const 최소공배수 = input[0] * input[1] / GCD(input[0], input[1])

console.log(GCD(input[0], input[1]))
console.log(최소공배수);