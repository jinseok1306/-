const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const X = fs.readFileSync(filePath).toString().trim();
let start = 1;
let n = 1;

while(start<=X){
    start += n;
    n++;
}

let def = X-(start-(n-1));

(n-1) % 2 == 0 ? console.log(`${def+1}/${n-1-def}`) : console.log(`${n-1-def}/${def+1}`);



