const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let X = input[1].split(" ").map(Number);

console.log(Math.min(...X) + " " + Math.max(...X));
