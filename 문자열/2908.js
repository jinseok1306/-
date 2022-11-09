const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [A,B] = fs.readFileSync(filePath).toString().split(' ');

const rev_a = Number(A.split('').reverse().join(''));
const rev_b = Number(B.split('').reverse().join(''));

(rev_a>rev_b)?console.log(rev_a):console.log(rev_b);