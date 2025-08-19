const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

let scoreA = 0;
let scoreB = 0;

const gpaList = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
};

for (let i = 0; i < input.length; i++) {
  const dataArr = input[i].split(" ");
  if (dataArr[2] === "P") {
    continue;
  } else {
    scoreA += Number(dataArr[1]) * gpaList[dataArr[2]];
    scoreB += Number(dataArr[1]);
  }
}

console.log(scoreA / scoreB);
