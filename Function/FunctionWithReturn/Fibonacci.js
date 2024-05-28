
// Fibonacci

function fibonacci(nterms) {
    s=""
    var n1=0
    var n2=1

    for(;nterms>0;nterms--){
        s+=n1+ " "
        var n3=n1+n2
        n1=n2
        n2=n3
    }
    return s
}


console.log(fibonacci(5));
console.log(fibonacci(10));