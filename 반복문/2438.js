const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let star = "";

for(let i=0; i<input; i++){
    star += '*';
    console.log(star);
}