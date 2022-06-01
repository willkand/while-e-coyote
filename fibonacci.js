const prompt = require('prompt-sync')({ sigint: true });

let n = +prompt(`Enter a value for 'n': `)

let count = 0
let fib = 0
let oldNum = 0

if (n > 0) {
    while (count !== n) {
        console.log(fib)
        if (count === 0) {
            fib++
        } else {
            fib += oldNum
            oldNum = fib - oldNum
        }
        count++
    }
} else {
    console.log(`Input a valid number for 'n'`)
}