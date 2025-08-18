const fs = require("fs");
const input = (process.platform === "linux" ? fs.readFileSync(0, "utf-8") : fs.readFileSync("run/input.txt")).toString().trim();

if (input === "") {
  console.log(0);
} else {
  console.log(input.split(/\s+/).length);
}
