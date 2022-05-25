const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0].split(" ")[0]);
let X = input[1].split(" ").map(Number);

console.log(Math.min(...X) + " " + Math.max(...X));
