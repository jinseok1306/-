const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');
let C = Number(input.shift());
const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
let answer = "";

for(let i=0; i<C; i++){    
    let arr = input.shift().split(' ').map(Number);
    let N = arr.shift();    
    let count =0;
    let avg = average(arr);

    arr.forEach((data, index)=>{
        count += data > avg ? 1 : 0;
    });
    
    answer += (i<C-1)? (count/N*100).toFixed(3) + "%\n" : (count/N*100).toFixed(3) + "%";
}
console.log(answer);