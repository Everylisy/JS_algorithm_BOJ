let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const topNum = parseInt(input[0]);
const btmNum = parseInt(input[1]);

const oneNum = btmNum % 10;
const tenNum = Math.floor((btmNum % 100) / 10);
const hunNum = Math.floor((btmNum % 1000) / 100);

console.log(topNum * oneNum);
console.log(topNum * tenNum);
console.log(topNum * hunNum);
console.log(topNum * btmNum);
