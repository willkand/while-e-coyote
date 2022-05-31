const prompt = require('prompt-sync')({ sigint: true });

let input = Number(prompt("Pick a number any number: "));
let sum = input;

while (sum <=100){
    sum = sum * 2
    console.log(sum);
}
