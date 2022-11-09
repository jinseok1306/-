const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function seq(n) {
    let number = n;
    let arr = [];
    let hansu_flag = true;
    let difference = 0;
    
    for(let i=0; i<String(n).length; i++){
        arr.push(number%10);
        if(i==1){
            difference = arr[1]-arr[0];
        }
        else if(i>1){
            hansu_flag = (difference == arr[i]-arr[i-1]) ? true : false;          
            if(!hansu_flag){
                break;
            }  
        }
        number = Math.floor(number/10);
    }

    return hansu_flag;
}

const input = Number(fs.readFileSync(filePath).toString().trim().split('\n'));
let count = 0;

for(let i=1; i<=input; i++){
    if(seq(i)){
        count++;
    }
}

console.log(count);



