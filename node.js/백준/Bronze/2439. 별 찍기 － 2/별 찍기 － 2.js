const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim();

for (let i = 1; i < Number(input) + 1; i++) {
  let star = "";
  for (let j = Number(input) - i; j > 0; j--) {
    star += " ";
  }
  for (let k = 0; k < i; k++) {
    star += "*";
  }
  console.log(star);
}
