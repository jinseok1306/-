const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim();

const arr = ['c=','c-','dz=','d-','lj','nj','s=','z='];

arr.forEach(element => {    
    let letter = new RegExp(element, "gi");
    input = input.replace(letter, "*");
});

console.log(input.length);

