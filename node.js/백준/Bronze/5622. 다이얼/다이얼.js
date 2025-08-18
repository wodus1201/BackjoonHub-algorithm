const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("");

const dial = [];
let charCode = 65;
let wholeTime = 0;

for (let num = 2; num <= 9; num++) {
  const bundle = [];
  const count = num === 7 || num === 9 ? 4 : 3;
  for (let k = 0; k < count; k++) {
    bundle.push(String.fromCharCode(charCode++));
  }
  dial.push(bundle);
}

for (let i = 0; i < input.length; i++) {
  wholeTime += dial.map((element) => element.indexOf(input[i])).findIndex((i) => i === 0 || i === 1 || i === 2 || i === 3) + 3;
}

console.log(wholeTime);
