const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim().split("\n");

const n = Number(input[0]);
let answer = 0;

for (let i = 1; i <= n; i++) {
  const word = input[i];
  const seen = new Set();
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    const currentWord = word[j];
    const previousWord = word[j - 1];

    if (currentWord !== previousWord) {
      if (seen.has(currentWord)) {
        isGroupWord = false;
        break;
      }
      seen.add(currentWord);
    }
  }

  if (isGroupWord) answer++;
}

console.log(answer);
