const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N,X] = input.shift().split(' ').map(Number);

let arr = input.shift().split(' ').map(Number);

let answer = [];

arr.forEach((data)=>{    
    (data < X) ? answer.push(data): "";
})

console.log(...answer);