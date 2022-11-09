const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let score = fs.readFileSync(filePath).toString().trim().split("\n");

let score_chk = parseInt(score/10);

switch (score_chk) {
    case 10:
    case 9:    
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
        break;
}

