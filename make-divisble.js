const prompt = require('prompt-sync')({ sigint: true });

let x = prompt("Enter x:");
let y = prompt("Enter y:");

while (x % y != 0) {
    x++
    console.log(x);
}

console.log(x,"is divisible by",y);