const fs = require("fs");
const { fileURLToPath } = require("url");
const [n, input] = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const scoreArray = input.trim().split(" ").map(Number);
const maximumScore = Math.max(...scoreArray);
const average = scoreArray.reduce((acc, cur) => acc + (cur / maximumScore) * 100, 0) / scoreArray.length;

console.log(average);
