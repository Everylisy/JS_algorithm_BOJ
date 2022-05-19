const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let H = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
let cook = parseInt(input[1]);

if (M + cook < 60) {
  M += cook;
} else {
  H += Math.floor((M + cook) / 60);
  M = (M + cook) % 60;
  if (H > 23) {
    H -= 24;
  }
}

console.log(H, M);
