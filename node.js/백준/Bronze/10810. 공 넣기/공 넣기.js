const fs = require("fs");
const { fileURLToPath } = require("url");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const [basketNumber, putCount] = input[0].split(" ").map(Number);

const ballInBasket = Array(basketNumber).fill(0);

for (let i = 1; i < putCount + 1; i++) {
  const operation = input[i].split(" ").map(Number);
  for (let j = operation[0] - 1; j < operation[1]; j++) {
    ballInBasket[j] = operation[2];
  }
}

console.log(ballInBasket.join(" "));
