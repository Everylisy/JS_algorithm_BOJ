const input = require("fs")
  .readFileSync(__dirname + "dev/stdin")
  .toString()
  .trim();

const alphabet = new Array(26)
  .fill()
  .map((_, i) => String.fromCharCode(i + 97))
  .join("");

let result = "";

for (let i = 0; i < alphabet.length; i++) {
  result += input.indexOf(alphabet[i]) + " ";
}

console.log(result);
