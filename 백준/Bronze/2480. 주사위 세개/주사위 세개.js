const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let [a, b, c] = [input[0], input[1], input[2]].sort();

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b || b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(Math.max(...input) * 100);
}