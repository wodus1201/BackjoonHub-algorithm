const fs = require("fs");
const { fileURLToPath } = require("url");
const [n, input] = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const [length, targetNumber] = n.trim().split(" ").map(Number);
const inputArray = input.trim().split(" ").map(Number);

const filteredArray = inputArray.filter((number) => number < targetNumber);
console.log(filteredArray.join(" "));
