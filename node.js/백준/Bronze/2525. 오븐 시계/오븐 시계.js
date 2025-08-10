const fs = require("fs");
const [input, n] = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");
const [hour, minute] = input.trim().split(" ").map(Number);
const time = Number(n);

const totalMinutes = (hour * 60 + minute + time) % 1440;

const resultHour = Math.floor(totalMinutes / 60);
const resultMinute = totalMinutes % 60;

console.log(resultHour, resultMinute);
