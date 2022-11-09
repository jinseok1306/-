const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('');
//ABC DEF GHI JKL MNO PQRS TUV WXYZ
const dialog = [3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 8,8,8,8, 9,9,9, 10,10,10,10];
let time = 0;

input.forEach((e)=>{
    time += dialog[e.charCodeAt()-65];    
});

console.log(time);