const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [M,N] = fs.readFileSync(filePath).toString().split("\n").map(Number);

let sum = 0;
let min = N;

for(let i=M; i<=N; i++){
    if(decimalCheck(i)){
        sum += i;
        min = min > i ? i : min;
    }
}

if(sum==0){
    console.log(-1);
}
else{
    console.log(sum);
    console.log(min);
}

function decimalCheck(n){
    if(n==1){
        return false;
    }
    for(let i=2; i<n; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

