const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split('\n');

let X = Number(input.shift());
let N = Number(input.shift());
let sum = 0;

for(let i=0; i<N; i++){
    let AB = input.shift().split(' ');
    let A = Number(AB[0]);
    let B = Number(AB[1]);

    sum += A*B;
}

X == sum ? console.log('Yes') : console.log('No');