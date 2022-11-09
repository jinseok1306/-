const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = ((input%4==0) && ((input%100!=0) || (input%400==0)))?'1':'0';

console.log(answer);