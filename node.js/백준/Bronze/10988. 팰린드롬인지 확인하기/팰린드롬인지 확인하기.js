const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("");

console.log(input.join("") === input.reverse().join("") ? 1 : 0);
