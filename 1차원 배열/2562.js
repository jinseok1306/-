const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let max_val = 0;
let index = 0;

for(let i=0; i<9; i++){
    let data = Number(input.shift());
    if(data>=max_val){
        max_val = data;
        index = i;
    }    
}

console.log(max_val);
console.log(index+1);