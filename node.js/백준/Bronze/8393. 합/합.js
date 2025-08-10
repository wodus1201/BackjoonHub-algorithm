const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim();

let finalNumber = 0;

for (let i = 1; i < Number(input) + 1; i++) {
  finalNumber += i;
}

console.log(finalNumber);
