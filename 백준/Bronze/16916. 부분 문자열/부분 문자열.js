const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let text, word;

rl.on('line', function (line) {
  if (!text) {
    text = line.trim();
  } else {
    word = line.trim();
    const answer = kmpSearch(text, word);
    console.log(answer ? 1 : 0);
    rl.close();
  }
});

rl.on('close', function () {
  process.exit();
});

function matchTable(word) {
  const arr = Array(word.length).fill(0);
  let suffix = 1;
  let prefix = 0;
  while (suffix < arr.length) {
    if (word[suffix] === word[prefix]) {
      prefix += 1;
      arr[suffix] = prefix;
      suffix += 1;
    } else if (prefix > 0 && word[suffix] !== word[prefix]) {
      prefix = arr[prefix - 1];
    } else {
      arr[suffix] = 0;
      suffix += 1;
    }
  }
  return arr;
}

function kmpSearch(text, pattern) {
  const table = matchTable(pattern);
  let j = 0;
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = table[j - 1];
    }
    if (text[i] === pattern[j]) {
      j++;
    }
    if (j === pattern.length) {
      return true;
    }
  }
  return false;
}