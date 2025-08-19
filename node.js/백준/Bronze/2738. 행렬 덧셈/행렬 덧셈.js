const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const matrixSize = input[0].split(" ").map(Number);
const answer = [];

for (let i = 1; i <= (input.length - 1) / 2; i++) {
  const sumArray = [];
  for (let j = 0; j < matrixSize[1]; j++) {
    sumArray.push(input[i].split(" ").map(Number)[j] + input[i + matrixSize[0]].split(" ").map(Number)[j]);
  }
  answer.push(sumArray.join(" "));
}

console.log(answer.join("\n"));
