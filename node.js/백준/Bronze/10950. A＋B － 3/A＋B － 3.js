const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");
const num = Number(input[0]);

for (let i = 0; i < num; i++) {
  const inputArr = input[i + 1].trim().split(" ").map(Number);
  console.log(inputArr[0] + inputArr[1]);
}
