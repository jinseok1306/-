const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

while(1){        
    if(input.length == 0){
        break;
    }
    else{
        let [A,B] = input.shift().split(' ').map(Number);
        console.log(A+B);
    }
}

