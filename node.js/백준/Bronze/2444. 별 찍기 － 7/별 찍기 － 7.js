const fs = require("fs");
const input = Number((process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim());

for (let i = 1; i < input + 1; i++) {
  console.log(`${" ".repeat(input - i)}${"*".repeat(2 * i - 1)}`);
}
for (let i = input - 1; i > 0; i--) {
  console.log(`${" ".repeat(input - i)}${"*".repeat(2 * i - 1)}`);
}
