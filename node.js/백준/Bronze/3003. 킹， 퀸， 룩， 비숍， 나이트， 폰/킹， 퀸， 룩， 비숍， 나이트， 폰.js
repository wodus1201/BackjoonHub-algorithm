const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split(" ").map(Number);

const correctPieceSet = [1, 1, 2, 2, 2, 8];
const answer = [];

for (let i = 0; i < correctPieceSet.length; i++) {
  answer.push(correctPieceSet[i] - input[i]);
}

console.log(answer.join(" "));
