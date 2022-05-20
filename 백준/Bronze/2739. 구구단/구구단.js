const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString();
let Num = parseInt(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${Num} * ${i} = ${Num * i}`);
}
