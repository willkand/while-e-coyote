const prompt = require('prompt-sync')({ sigint: true });

let input = Number(prompt("Enter a number or type 'done': "))
let sum = 0;

while (input !== 'done') {
    sum = sum + Number(input);
    input = prompt("Enter another number or type 'done': ")
}

console.log("Sum:", sum);