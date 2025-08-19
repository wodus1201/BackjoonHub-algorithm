const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

let maxNum = -Infinity;
let location = [];

for (let i = 0; i < input.length; i++) {
  const numberArray = input[i].split(" ").map(Number);
  for (let j = 0; j < numberArray.length; j++) {
    if (numberArray[j] > maxNum) {
      maxNum = numberArray[j];
      location = [i + 1, j + 1];
    }
  }
}

console.log(`${maxNum}\n${location.join(" ")}`);
