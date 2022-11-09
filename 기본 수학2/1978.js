const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input.shift());
let arr = input.shift().split(" ").map(Number);
let answer = 0;

arr.forEach((e)=>{
    if(decimalCheck(e)){
        answer++;
    }
});

console.log(answer);

function decimalCheck(n) {
    if(n==1){
        return false;
    }

    for(let i=2; i<n; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
