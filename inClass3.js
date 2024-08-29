function isEven(n) {
    if (n === 0) {
        return true;
    } else if (n === 1 || n === -1) {
        return false;
    }

    if (n > 1) {
        return isEven(n - 2);
    } else { // if n < -1
        return isEven(n + 2); // negative cases
    }
}

// test cases
console.log(isEven(50));  
console.log(isEven(75));  
console.log(isEven(-1));  
console.log(isEven(-2));