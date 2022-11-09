const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const T = Number(input.shift());

let answer = "";

for(let i=0; i<T; i++){
    const [H,W,N] = input.shift().split(' ').map(Number);
    let roomNum = (N%H==0) ? parseInt(N/H) : parseInt(N/H)+1;
        
    let floorNum = (N%H == 0) ? H : N%H;
    answer += (i<T-1) ? (`${floorNum*100 + roomNum}\n`) : (`${floorNum*100 + roomNum}`);
}

console.log(answer);