const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

function checkFrequency(text) {
  text = text.replace(/\s/g, '');

  const frequency = {};
  for (let char of text) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let maxFrequency = 0;
  for (let char in frequency) {
    maxFrequency = Math.max(maxFrequency, frequency[char]);
  }

  const frequentChars = [];
  for (let char in frequency) {
    if (frequency[char] === maxFrequency) {
      frequentChars.push(char);
    }
  }

  if (frequentChars.length > 1) {
    return '?';
  } else {
    return frequentChars[0];
  }
}

for (let i = 1; i < input.length; i++) {
  const testCase = input[i];
  console.log(checkFrequency(testCase));
}