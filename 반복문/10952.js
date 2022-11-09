const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

while(1){
    let [A,B] = input.shift().split(' ').map(Number);
    if(A==0 && B==0){
        break;
    }
    else{
        console.log(A+B);
    }
}

