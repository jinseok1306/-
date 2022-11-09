const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input.shift());
let arr = input.shift().split(' ').map(Number);
let V = Number(input.shift());
let answer = 0;

for(let i=0; i<arr.length; i++){
    answer+= (arr[i]==V)?1:0;
}

console.log(answer);

