const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim()
  .split("\n");

const score = input[1].split(" ");
const maxScore = Math.max(...score);
let newScore = [];

for (let i = 0; i < score.length; i++) {
  newScore.push((score[i] / maxScore) * 100);
}

const result = newScore.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const average = result / newScore.length;
console.log(average);
