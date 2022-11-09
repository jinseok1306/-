const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N,...data] = input.map(Number);

const average = arr => Math.round(arr.reduce((p, c) => p + c, 0) / arr.length);

data.sort((a,b)=>a-b);

const avg = (average(data)===-0)?0:average(data);

const map = new Map();
let max = 1;
for(let number of data){
    if(map.has(number)){
        max = Math.max(max, map.get(number)+1);
        map.set(number, map.get(number)+1);
    }
    else{
        map.set(number,1);
    }
}

const max_arr = [];

for(let [key, val] of map){
    if(val === max) max_arr.push(key);
}

//산술평균
console.log(avg);
//중앙값
console.log(data[parseInt(N/2)]);
//최빈값
(max_arr.length===1)?console.log(`${max_arr[0]}`):console.log(`${max_arr[1]}`);
//범위
console.log(data[N-1]-data[0]);
