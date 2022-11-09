const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [M, N] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const primeNumber = Array(N+1).fill(true);

primeNumber[1] = false;

for(let i=2; i<=Math.ceil(Math.sqrt(N)); i++){
    if(primeNumber[i]){
        let m = 2;
        while(i*m <= N){
            primeNumber[i*m] = false;
            m++;
        }
    }
}

const result = [];

for(let i=M; i<= N; i++){
    if(primeNumber[i]){
        result.push(i);
    }
}

console.log(result.join('\n'));