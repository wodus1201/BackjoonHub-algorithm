const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]);

if (num2 >= 45) console.log(num1, num2 - 45);
else if (num2 < 45 && num1 === 0) console.log(num1 + 23, num2 + 15);
else if (num2 < 45 && num1 > 0) console.log(num1 - 1, num2 + 15);
