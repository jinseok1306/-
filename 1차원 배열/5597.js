const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let students = []

for(let i=1; i<=30; i++){
    students.push(i);
}

for(let i=0; i<28; i++){
    let data = Number(input.shift());    
    students = students.filter((e)=>
        e != data
    );   
}
console.log(students[0]);
console.log(students[1]);