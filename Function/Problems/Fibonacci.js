
// Fibonacci

function fibonacci(nterms) {
    var n1=0
    var n2=1

    for(;nterms>0;nterms--){
        console.log(n1);
        var n3=n1+n2
        n1=n2
        n2=n3
    }
}

fibonacci(5)