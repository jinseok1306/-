const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = [];

const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

for(let i=0; i<5; i++){
    num.push(Number(input.shift()));
}

num.sort((a,b)=>a-b);

console.log(average(num));
console.log(num[2]);