const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const arr = input.map(x=>x.split(' ').map(Number));

arr.sort((a,b)=>{
    if(a[0] !==b[0]){
        return a[0]-b[0];
    }
    return a[1]-b[1];    
});

console.log(arr.join('\n').replace(/,/gi,' '));