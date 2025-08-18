const fs = require("fs");
const { fileURLToPath } = require("url");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const [basketNumber, changeNumber] = input[0].split(" ").map(Number);
let numberInBasket = [...Array(basketNumber)].map((_, i) => i + 1);

for (let i = 1; i < changeNumber + 1; i++) {
  const operation = input[i].split(" ").map(Number);

  const leftArray = numberInBasket.slice(0, operation[0] - 1);
  const targetArray = numberInBasket.slice(operation[0] - 1, operation[1]).reverse();
  const rightArray = numberInBasket.slice(operation[1], numberInBasket.length);

  numberInBasket = leftArray.concat(targetArray).concat(rightArray);
}

console.log(numberInBasket.join(" "));
