const prompt = require('prompt-sync')({ sigint: true });

let newString = prompt("Enter any string of your choice: ");
let sum = newString;

while (sum.length <= 10){
    console.log(sum);
    sum = sum + newString;
}
