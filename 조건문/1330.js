const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let NM = input.shift().split(' ');
let N = Number(NM.shift());
let M = Number(NM.shift());

if (N>M){
    console.log('>');
}
else if (N<M){
    console.log('<');
}
else{
    console.log('==');
}