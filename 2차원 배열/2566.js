const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let max = 0;
let row = 0;
let col = 0;

for(let i=0; i<9; i++){
    let arr = input.shift().split(' ').map(Number);

    arr.forEach((data,index)=>{
        if(data>=max){
            max = data;
            row = i;
            col = index;
        }
    });
}

console.log(`${max}`);
console.log(`${row+1} ${col+1}`);