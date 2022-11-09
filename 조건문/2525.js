const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split('\n');

let AB = input.shift().split(' ');
let A = Number(AB.shift());
let B = Number(AB.shift());
let C = Number(input.shift());

let min_sum = A*60+B+C;

let answer = (min_sum>=1440) ? min_sum-1440 : min_sum;

console.log(`${parseInt(answer/60)} ${answer%60}`);