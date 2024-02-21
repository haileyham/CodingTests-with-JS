const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");
input.shift();

const deque = [];
const result = [];

for (let i = 0; i < input.length; i++) {
  const [command, arg] = input[i].trim().split(' ');

  switch (command) {
    case 'push_front':
      deque.unshift(arg);
      break;
    case 'push_back':
      deque.push(arg);
      break;
    case 'pop_front':
      result.push(deque.shift() || -1)
      break;
    case 'pop_back':
      result.push(deque.pop() || -1)
      break;
    case 'size':
      result.push(deque.length);
      break;
    case 'empty':
      result.push(deque[0] ? 0 : 1);
      break;
    case 'front':
      result.push(deque[0] ? deque[0] : -1);
      break;
    case 'back':
      result.push(deque[0] ? deque[deque.length - 1] : -1);
      break;
  }
}

console.log(result.join('\n'))