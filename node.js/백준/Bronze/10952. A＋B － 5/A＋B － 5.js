const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

for (element of input) {
  const numberSet = element.split(" ").map(Number);

  if (numberSet[0] === 0) return;

  console.log(numberSet[0] + numberSet[1]);
}
