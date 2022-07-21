const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim()
  .split("\n");

let remains = [];

for (let i = 0; i <= 9; i++) {
  remains.push(input[i] % 42);
}

const set = new Set(remains);
console.log([...set].length);
