let fs = require("fs");
let [input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const win = "I'm a winner!";
const lose = "You're the winner?";
let sum = 0;
const alpha = [
  3, 2, 1, 2, 3, 3, 3, 3, 1, 1, 3, 1, 3, 3, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 1,
];

let strArr = [...input];
for (let i = 0; i < strArr.length; i++) {
  tmp = strArr[i].charCodeAt() - 65;
  sum += alpha[tmp];
}

if (sum % 2) console.log(win);
else console.log(lose);