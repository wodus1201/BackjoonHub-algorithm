const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const count = Number(input[0]);
let result = [];

for (let i = 1; i <= count; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result.push(a + b);
}

console.log(result.join("\n"));
