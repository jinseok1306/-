const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const arr1 = [];
const arr2 = [];
let answer = "";

for(let i=0; i<N; i++){
    let data = input.shift().split(' ').map(Number);
    arr1.push(data);
}

for(let i=0; i<N; i++){
    let data = input.shift().split(' ').map(Number);
    arr2.push(data);
}

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){        
        answer += (j<M-1) ? `${arr1[i][j]+arr2[i][j]} ` : `${arr1[i][j]+arr2[i][j]}`;
    }
    answer += (i<N-1) ? "\n" : "";
}

console.log(answer);