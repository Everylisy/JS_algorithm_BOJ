const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim()
  .split("");

const reversed = input.reverse().join("").split(" ").map(Number);
console.log(Math.max(...reversed));
