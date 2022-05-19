const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ");
let H = parseInt(input[0]);
let M = parseInt(input[1]);

M -= 45;
if (M < 0) {
  H -= 1;
  M += 60;
  if (H < 0) {
    H = 23;
  }
}

console.log(H, M);
