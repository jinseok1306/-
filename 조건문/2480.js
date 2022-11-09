const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split('\n');

let dice = input.shift().split(' ').sort();

//같은 눈이 3개
if (dice[0] == dice[1] && dice[1]== dice[2]){
    console.log(`${10000 + dice[0]*1000}`);
}
//모두 다른 눈
else if (dice[0] != dice[1] && dice[0] != dice[2] && dice[1] != dice[2]){
    console.log(`${dice[2]*100}`);
}
//같은 눈이 2개
else {
    console.log(`${1000 + dice[1]*100}`);
}