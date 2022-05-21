const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = "";

for (let i = 1; i <= input[0]; i++) {
  let nums = input[i].split(" ");
  result += parseInt(nums[0]) + parseInt(nums[1]) + "\n";
}

console.log(result);
