const fs = require("fs");
const { fileURLToPath } = require("url");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n").map(Number);

input.sort(function (a, b) {
  return a - b;
});

if (input[0] !== 1) {
  console.log(1);
}

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] + 1 !== input[i + 1]) console.log(input[i] + 1);
}

if (input[27] !== 30) {
  console.log(30);
}
