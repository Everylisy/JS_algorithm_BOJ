const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  let nums = input[i].split(" ");
  console.log(parseInt(nums[0]) + parseInt(nums[1]));
}
