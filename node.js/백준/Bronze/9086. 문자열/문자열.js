const fs = require("fs");
const { fileURLToPath } = require("url");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  const targetArray = input[i].split("");
  console.log(`${targetArray[0]}${targetArray[targetArray.length - 1]}`);
}
