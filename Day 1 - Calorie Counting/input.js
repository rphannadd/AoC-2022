const fs = require("fs");
const path = require("path");

const rawInput = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
const input = rawInput.trim().split("\n\n");
module.exports = { input };
