const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split('\n');
const arr = input.toString().split("");
const alpha = Array.from({length:26}, ()=>-1);

arr.forEach((e,i) =>{       
    if(alpha[e.charCodeAt()-97] == -1){
        alpha[e.charCodeAt()-97] = i;     
    }    
})

console.log(...alpha);

