const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [A, B] = fs.readFileSync(filePath).toString().split(" ");

console.log(`${BigInt(A)+BigInt(B)}`);