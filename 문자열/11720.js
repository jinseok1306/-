const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input.shift());
let arr = input.shift().split("").map(Number);
let sum = 0;

arr.forEach(e => {
    sum += e;
});

console.log(sum);