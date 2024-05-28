
// factorial

function factorial(num) {
    var fact=1
    for(var i=1;i<=num;i++){
        fact*=i
    }
    return fact
}

// console.log(factorial(4));

// find factorial of numbers from r1 to r2

function rangeFactorial(r1,r2) {
    for(;r1<=r2;r1++){
        console.log(factorial(r1));
    }
}

rangeFactorial(1,5)