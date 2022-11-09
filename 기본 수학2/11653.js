const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let N = Number(fs.readFileSync(filePath).toString().trim());

while(N>1){
    for(let i=2; i<=N; i++){
        if(N%i==0){
            console.log(i);
            N = N/i;
            break;
        }
    }
}