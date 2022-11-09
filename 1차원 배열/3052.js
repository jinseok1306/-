const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let numSet = new Set();

for(let i=0; i<10; i++){
    let data = Number(input.shift());
    numSet.add(data%42);
}

console.log(numSet.size);