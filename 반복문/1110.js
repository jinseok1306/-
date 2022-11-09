const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const N = fs.readFileSync(filePath).toString().trim().split('\n');

let num = -1;
let count = 0;

while(N != num){
    
    if(count==0){
        num = parseInt(N);
    }
    let num_left = parseInt(num/10);
    let num_right = num%10;

    num = num_right*10 + (num_left+num_right)%10;    
    count++;
}

console.log(count);