const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [A, B, C] = [input[0], input[1], input[2]];
let result = String(A * B * C);

for (let i = 0; i <= 9; i++) {
  console.log(result.split(i).length - 1);
}
