const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

let allPrice = Number(input[0]);
const itemCount = Number(input[1]);

for (let i = 0; i < itemCount; i++) {
  const itemPriceAndCount = input[i + 2].trim().split(" ").map(Number);
  allPrice -= itemPriceAndCount[0] * itemPriceAndCount[1];
}

console.log(allPrice === 0 ? "Yes" : "No");
