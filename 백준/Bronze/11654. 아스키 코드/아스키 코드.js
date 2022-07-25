const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim();

console.log(input.charCodeAt(0));
