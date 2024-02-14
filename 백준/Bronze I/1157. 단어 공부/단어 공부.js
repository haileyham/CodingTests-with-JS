const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

const alphabetCounts = {};
const textLower = input[0].toLowerCase();

for (let i = 0; i < textLower.length; i++) {
  const char = textLower[i];
    alphabetCounts[char] = (alphabetCounts[char] || 0) + 1;
}

let maxFrequency = 0;
for (const char in alphabetCounts) {
  maxFrequency = Math.max(maxFrequency, alphabetCounts[char]);
}

const mostFrequentAlphabets = [];
for (const char in alphabetCounts) {
  if (alphabetCounts[char] === maxFrequency) {
    mostFrequentAlphabets.push(char.toUpperCase());
  }
}

if (mostFrequentAlphabets.length === 1) {
  console.log(mostFrequentAlphabets[0]);
} else {
  console.log('?');
}