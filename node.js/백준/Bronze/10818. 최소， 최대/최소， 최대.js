const fs = require("fs");
const { fileURLToPath } = require("url");
const [n, input] = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const length = Number(n);
const inputArray = input.trim().split(" ").map(Number);

let minimum = inputArray[0];
let maximum = inputArray[0];

for (let i = 1; i < length; i++) {
  if (maximum < inputArray[i]) {
    maximum = inputArray[i];
  }
  if (minimum > inputArray[i]) {
    minimum = inputArray[i];
  }
}

console.log(minimum, maximum);
