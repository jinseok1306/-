const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

while(1){
    let n = Number(input.shift());    
    if(n==0){
        break;
    }

    console.log(primeNumberCheck(n));
}

function primeNumberCheck(n){
    const primeNumber = Array(2*n+1).fill(true);
    let count = 0;

    primeNumber[1] = false;

    for(let i=2; i<=Math.ceil(Math.sqrt(2*n)); i++){
        if(primeNumber[i]){
            let m = 2;
            while(i*m<=2*n){
                primeNumber[i*m] = false;
                m++;
            }
        }
    }

    for(let i=n+1; i<=2*n; i++){
        if(primeNumber[i]){
            count++;
        }
    }

    return count;
}