const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, k] = input.shift().split(' ').map(Number);

const arr = input.shift().split(' ').map(Number);

arr.sort((a,b)=>b-a);

console.log(arr[k-1]);