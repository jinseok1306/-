const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split('\n');
const T = Number(input.shift());

for(let i=0; i<T; i++){
    let [R,S] = input.shift().split(' ');
    let munja = S.split('');
    let answer = "";
    
    munja.forEach((e)=>{
        answer += e.repeat(R);
    });
    console.log(answer);
}