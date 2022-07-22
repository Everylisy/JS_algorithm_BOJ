const input = +require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim();

let num = input;
let sum;
let cycle = 0;

while (true) {
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  cycle++;
  if (input === num) {
    break;
  }
}
console.log(cycle);
