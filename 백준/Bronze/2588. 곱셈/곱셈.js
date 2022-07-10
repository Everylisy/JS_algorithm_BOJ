let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
let topNum = input[0];
let btmNum = input[1];
console.log(topNum * btmNum[2]);
console.log(topNum * btmNum[1]);
console.log(topNum * btmNum[0]);
console.log(topNum * btmNum);
