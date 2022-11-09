const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input.shift());

const primeNumber = Array(10000).fill(true);

const max = 10000;

primeNumber[1] = false;

for(let i=2; i<=Math.ceil(Math.sqrt(max/2)); i++){
    if(primeNumber[i]){
        let m = 2;
        while(i*m<=max){
            primeNumber[i*m] = false;
            m++;
        }
    }
}

for(let i=0; i<T; i++){
    const N = Number(input.shift());

    goldbach(N);
}

function goldbach(n){
    let start = 0;
    let diff = n;

    for(let i = 2; i<=Math.ceil(n/2); i++){
        if(primeNumber[i] && primeNumber[n-i]){                   
            if(diff>(n-2*i)){
                diff = n-2*i;
                start = i;
            }                          
        }
    }

    console.log(`${start} ${n-start}`);    
    return;
}