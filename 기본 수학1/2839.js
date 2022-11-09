const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let N = fs.readFileSync(filePath).toString();

let five = 0;
let three = 0;

while(1){
    if(N%5===0){
        five = N/5;
        console.log(five+three);
        break;
    }
    if(N<0){
        console.log(-1);
        break;
    }
    N= N-3;
    three++;
}