const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= parseInt(input[0]); i++) {
  let count = 0;
  let result = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    result += count;
  }

  console.log(result);
}
