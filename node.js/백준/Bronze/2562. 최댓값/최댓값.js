const fs = require("fs");
const { fileURLToPath } = require("url");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n").map(Number);

let maximum = input[0];

input.map((number) => {
  if (number > maximum) {
    maximum = number;
  }
});

console.log(`${maximum}\n${input.indexOf(maximum) + 1}`);
