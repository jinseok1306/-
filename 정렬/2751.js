const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, ...arr] = input.map(Number);

arr.sort((a,b)=>a-b);

console.log(arr.join('\n'));