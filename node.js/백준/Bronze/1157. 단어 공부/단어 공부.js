const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().toUpperCase().split("");

const countMap = {};
for (const alphabet of input) {
  countMap[alphabet] = (countMap[alphabet] || 0) + 1;
}

let maxCount = 0;
let mostFrequent = "";
let isDuplicate = false;

for (const key in countMap) {
  if (countMap[key] > maxCount) {
    maxCount = countMap[key];
    mostFrequent = key;
    isDuplicate = false;
  } else if (countMap[key] === maxCount) {
    isDuplicate = true;
  }
}

console.log(isDuplicate ? "?" : mostFrequent);
