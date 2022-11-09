const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = Number(input.shift());
let arr = input.shift().split(' ').map(Number);
let max = Math.max(...arr);
let sum = 0;

arr.forEach((data)=>{
    sum += data/max*100;
})

console.log(sum/N);
