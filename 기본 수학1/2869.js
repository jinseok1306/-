const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [A, B, V] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(`${Math.ceil((V-B)/(A-B))}`);