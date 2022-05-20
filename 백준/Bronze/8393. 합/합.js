const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString();

let N = parseInt(input);
let result = 0;

for (let i = 1; i <= N; i++) {
  result += i;
}

console.log(result);
