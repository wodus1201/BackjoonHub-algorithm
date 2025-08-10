const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split(" ").map(Number);

const firstFace = input[0];
const secondFace = input[1];
const thirdFace = input[2];

if (firstFace === secondFace && secondFace === thirdFace) console.log(firstFace * 1000 + 10000);
else if (firstFace === secondFace || firstFace === thirdFace) console.log(firstFace * 100 + 1000);
else if (secondFace === thirdFace) console.log(secondFace * 100 + 1000);
else console.log(Math.max(...input) * 100);
