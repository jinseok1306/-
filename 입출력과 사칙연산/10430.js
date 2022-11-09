const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let ABC = input.shift().split(' ');
let A = Number(ABC.shift());
let B = Number(ABC.shift());
let C = Number(ABC.shift());

console.log(`${(A+B)%C}`);
console.log(`${((A%C)+(B%C))%C}`);
console.log(`${(A*B)%C}`);
console.log(`${((A%C)*(B%C))%C}`);