const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

let arr = [];

for(let i=0; i<N; i++){
    arr.push(Number(input.shift()));
}

arr.sort((a,b)=>a-b);

console.log(arr.join('\n'));