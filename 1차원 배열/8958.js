const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = Number(input.shift());
let answer = "";

for(let i=0; i<T; i++){
    let arr = input.shift().split('');
    let sum = 0;
    let count = 0;
    
    arr.forEach((data)=>{
        if(data=="O"){
            count++;
            sum += count;
        }
        else{
            count=0;
        }
    });
    answer += (i<T-1) ? sum + "\n" : sum;
}

console.log(answer);

