const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split('\n');

let T = Number(input.shift());

for(let i=1; i<=T; i++){
    let AB = input.shift().split(' ');
    let A = Number(AB[0]);
    let B = Number(AB[1]);

    console.log(`Case #${i}: ${A} + ${B} = ${A+B}`);
}