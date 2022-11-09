const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line",(line) => {        
    input.push(parseInt(line));
        
}).on("close", () => {
    const x = input[0];
    const y = input[1];

    if(x>0){
        y>0 ? console.log(1) : console.log(4);
    }
    else{
        y>0 ? console.log(2) : console.log(3);
    }

    process.exit();
});