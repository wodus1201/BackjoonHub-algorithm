const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim();

for (let i = 1; i < 10; i++) {
  console.log(`${Number(input)} * ${i} = ${Number(input) * i}`);
}
