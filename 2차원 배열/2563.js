const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const base_arr = Array.from(Array(100),() => Array(100).fill(0));
let cnt = 0;

for(let i=0; i<N; i++){
    let [width,height] = input.shift().split(" ").map(Number);

    for(let x=width; x<width+10; x++){
        for(let y=height; y<height+10; y++){
            if(base_arr[x][y]==1){
                continue;
            }
            base_arr[x][y] = 1;
            cnt++;
        }
    }
}

console.log(cnt);
