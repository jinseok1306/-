const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let star = '';
let space = ' ';

for(let i=1; i<=input; i++){
    star += '*';
    console.log(`${space.repeat(input-i) + star}`);
}


