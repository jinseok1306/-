const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let T = Number(input.shift());

for(let i=0; i<T; i++){
    let k = Number(input.shift()); //층수
    let n = Number(input.shift()); //호수

    let result = factorial(k, n);

    console.log(result);
}

function factorial (k,n){
    let sum = 0;

    if(k==0){
        return n;    
    }
    else{
        for(let i=1; i<=n; i++){
            sum+=factorial(k-1,i);
        }
        return sum;        
    }
}