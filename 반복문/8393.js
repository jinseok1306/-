const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const N = fs.readFileSync(filePath).toString().trim().split('\n');
let answer = 0;

for(let i=1; i<=N; i++){
    answer += i;
}

console.log(answer);
