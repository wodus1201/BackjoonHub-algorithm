const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const inputArray = [];

for (element of input) {
  const numberSet = element.split(" ").map(Number);
  inputArray.push(numberSet[0] + numberSet[1]);
}

console.log(inputArray.join("\n"));
