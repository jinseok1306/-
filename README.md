# Baekjoon-Online-Judge
백준 알고리즘 문제풀이

## Node.js 테스트 방법

### 1. fs 모듈을 이용하는 방법
fs 모듈의 경우는 터미널 창에서 입력을 하는게 아닌 저장된 파일을 불러와 입력값으로 사용한다. 그렇기에 개인 작업환경에서 사용할 파일을 만들어야 하며 백준 알고리즘에서 사용할 파일도 연결해주어야 제출 후 채점이 정상적으로 이루어진다.  fs 모듈의 장점은 readline보다  빠르다는 것이다.

백준 테스트 환경은 리눅스 기반이며 /dev/stdin 경로를 참고하여 입력을 진행한다. 사용자 개발 환경에서는 입력 파일을 아래와 같이 만들어서 테트스하면 된다.

__1) 한 줄로 입력을 받을 때__
```javascript
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let NM = input.shift().split(' ');
let N = Number(NM.shift());
let M = Number(NM.shift());
```   
   
__2) 여러 줄로 입력을 받을 때__
```javascript
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let NM = input.shift().split(' ');
let N = Number(NM.shift());
let M = Number(NM.shift());

let board = [];
for(let i=0; i<N; i++){
    board[i] = input.shift().split('');
}
```   

### 2. readline 모듈을 이용하는 방법
fs 모듈을 터미널에 입력값을 직접 입력하면서 테스트를 진행할 수 있다. 백준 알고리즘에서 테스트하기에 다소 적합하지는 않다.   

__1) 한 개의 입력만 받을 때__ 
```javascript
function solution(input){
    console.log(input);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input;
rl.on("line", function(line){
    input = line;
    // input = parseInt(line); // 입력 값이 정수라면 parseInt로 형변환
    rl.close();
}).on("close", function(){
    solution(input);
    process.exit();
})
```   

__2) 한 줄의 입력을 받을 때(띄어쓰기로 구분)__
```javascript
//한 줄의 입력(띄어쓰기 o , 예를 들면 1 2 3 4 5)
function solution(input){
    const [a,b] = input;
    const answer = a+b;
    console.log(answer);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input;
let list = [];
rl.on('line', function(line) {
    input = line;
    rl.close();
}).on("close", function() {
    // list = input.split(' ').map((el) => el); 
    list = input.split(' ').map((el) => parseInt(el)); // 입력값이 정수라면 parseInt로 형 변환
    solution(list);
    process.exit();
});
```   

__3) 여러 줄의 입력을 받을 때__
```javascript
//여러줄  입력시(n, input)
function solution(n, input) {
    console.log(n);
    console.log(input);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line)
    //rl.close()가 없어서 계속 입력
    //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function() {
    let n = parseInt(input[0]);
    let list = input[1].split(' ').map((el) => parseInt(el));
    solution(n, list);
    process.exit();
});


//여러줄 입력시(input1, input2)
function solution(input1, input2) {
    console.log(input1);
    console.log(input2);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line)
    //rl.close()가 없어서 계속 입력
    //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function() {
    let list1 = input[0].split(' ').map((el) => parseInt(el));
    let list2 = input[1].split(' ').map((el) => parseInt(el));
    solution(list1, list2);
    process.exit();
});
```
