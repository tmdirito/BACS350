const prompt = require('prompt-sync')();

let n = parseFloat(prompt('Enter the number of terms: '));

function fibonacciSequence(n) {
    let fib = [];
    if (n <= 0) { 
        
    } else if (n == 1) {
        fib = [0];
    } else if (n == 2) {
        fib = [0, 1];
    } else {
        fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    } return fib;
}

let fibonacci = fibonacciSequence(n);
console.log('The first ' + n + ' numbers in the Fibonacci sequence are: ' + fibonacci.join(", "));