const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split(" ").map(Number);

function prime(input) {
  const primes = [];

  for (let num = input[0]; num <= input[1]; num++) {
    let isPrime = true;

    if (num <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}

const answer = prime(input).join("\n");
console.log(answer); 