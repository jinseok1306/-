const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split('\n');
const voca = String(input).toUpperCase().split("");
const alpha = Array.from({length:26}, ()=>0);

voca.forEach((e)=>{
    alpha[e.charCodeAt()-65]++;
})

const max = Math.max(...alpha);
const count = alpha.filter((e)=>max===e).length;

(count>1) ? console.log(`?`) : console.log(`${String.fromCharCode(alpha.indexOf(max,0)+65)}`);
