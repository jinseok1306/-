const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const N = fs.readFileSync(filePath).toString().trim();

let count = 1;
let start = 1;

while(start<N){
    start += 6*count;
    count++;
}

console.log(count);

