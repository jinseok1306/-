const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const my_chess = [1,1,2,2,2,8];

const input_data = Array.from(input.shift().split(' '));

let answer = input_data.map((i, index) => {
    return my_chess[index] - i;
})
  
console.log(...answer)      
