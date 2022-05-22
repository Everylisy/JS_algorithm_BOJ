const input = +require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

let star = "";

for (let i = 0; i < input; i++) {
  for (let s = input; s > i + 1; s--) {
    star += " ";
  }
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
