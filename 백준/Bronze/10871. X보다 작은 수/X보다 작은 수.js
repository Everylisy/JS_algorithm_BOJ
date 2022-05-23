const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0].split(" ")[0]);
let X = parseInt(input[0].split(" ")[1]);
let A = input[1].split(" ");
// let result = A.filter((num) => num < X);
let result = "";

for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    result += A[i] + " ";
  }
}

console.log(result);
