const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const N = fs.readFileSync(filePath).toString().trim().split('\n');

for (let index = 1; index <= 9; index++) {
    console.log(`${N} * ${index} = ${N*index}`);    
}

