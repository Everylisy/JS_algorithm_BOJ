const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let nums = input.map(Number);
let max = Math.max(...nums);

console.log(max);
console.log(nums.indexOf(max) + 1);
