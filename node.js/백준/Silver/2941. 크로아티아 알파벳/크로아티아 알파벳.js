const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let word = input;
for (let c of croatia) {
  word = word.split(c).join("*");
}

console.log(word.length);
