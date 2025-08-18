const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const testCount = Number(input[0]);

for (let i = 1; i < testCount + 1; i++) {
  const [repeatNumber, givenString] = input[i].split(" ");
  const result = [...givenString].map((alphabet) => alphabet.repeat(Number(repeatNumber))).join("");

  console.log(result);
}
