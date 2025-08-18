const fs = require("fs");
const { fileURLToPath } = require("url");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const [basketNumber, changeCount] = input[0].split(" ").map(Number);
const numberInBasket = [...Array(basketNumber)].map((_, i) => i + 1);

for (let i = 1; i < changeCount + 1; i++) {
  const operation = input[i].split(" ").map(Number);
  const firstNum = operation[0] - 1;
  const secondNum = operation[1] - 1;

  [numberInBasket[firstNum], numberInBasket[secondNum]] = [numberInBasket[secondNum], numberInBasket[firstNum]];
}

console.log(numberInBasket.join(" "));
