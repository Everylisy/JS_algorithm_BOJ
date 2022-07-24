const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= +input[0]; i++) {
  let score = input[i].split(" ");
  let students = Number(score.shift());
  let avg =
    score.reduce((sum, currValue) => (sum += currValue * 1), 0) / students;
  let cnt = 0;

  for (let j = 0; j < students; j++) {
    if (avg < score[j]) {
      cnt++;
    }
  }
  let result = (cnt / students) * 100;
  console.log(`${result.toFixed(3)}%`);
}
