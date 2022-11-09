const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split('\n');

let HM = input.shift().split(' ');
let H = Number(HM.shift());
let M = Number(HM.shift());

let minute_sum = H*60 + M;

let answer = minute_sum-45<0 ? minute_sum-45 + 24*60 : minute_sum-45;

console.log(`${parseInt(answer/60)} ${answer%60}`);