const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input[1].split("").map(Number);
const result = num.reduce((sum, currValue) => (sum += currValue), 0);
console.log(result);
