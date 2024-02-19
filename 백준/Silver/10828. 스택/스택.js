const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

const numCommands = parseInt(input.shift());
const stack = [];
const result = [];

for (let i = 0; i < numCommands; i++) {
    const [command, arg] = input[i].trim().split(' ');

    switch (command) {
        case 'push':
            stack.push(parseInt(arg));
            break;
        case 'pop':
            result.push(stack.length ? stack.pop() : -1);
            break;
        case 'size':
            result.push(stack.length);
            break;
        case 'empty':
            result.push(stack.length ? 0 : 1);
            break;
        case 'top':
            result.push(stack.length ? stack[stack.length - 1] : -1);
            break;
    }
}

console.log(result.join('\n'));