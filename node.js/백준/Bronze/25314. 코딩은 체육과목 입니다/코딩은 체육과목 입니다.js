const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim();

let finalLong = "";

for (let i = 0; i < (Number(input) - 4) / 4; i++) {
  finalLong += "long ";
}

console.log(finalLong + "long int");
