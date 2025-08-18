const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim();

const alphabetLocator = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const charCode = input.charCodeAt(i) - 97;
  if (alphabetLocator[charCode] === -1) {
    alphabetLocator[charCode] = i;
  }
}

console.log(alphabetLocator.join(" "));
