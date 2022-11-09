const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let first_val = input[0];

let second_val = input[1];

let second_part = second_val.toString().split("");

second_part.reverse().forEach(data => {
    console.log(`${first_val * parseInt(data)}`); 
});
console.log(`${first_val*second_val}`);