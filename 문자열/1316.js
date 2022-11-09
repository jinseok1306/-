const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

let answer = N;

for(let i=0; i<N; i++){
    let voca = input.shift().split('');    
    const alpha = Array.from({length:26}, ()=>false);

    for(let j=1; j<voca.length; j++){
        if(voca[j-1] != voca[j]){
            if(alpha[String(voca[j]).charCodeAt()-97]){
                answer--;
                break;
            }
            alpha[String(voca[j-1]).charCodeAt()-97] = true;
        }
    }
}

console.log(`${answer}`);
