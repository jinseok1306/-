const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [A,B,C] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

if(C<=B){
    console.log(-1);
}
else{
    console.log(Math.floor(A/(C-B))+1);
}
