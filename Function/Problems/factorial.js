
//  Factorial of a number ?


function factorial(num) {
    var fact=1
    for(;num>0;num--){
        fact*=num
    }
    console.log(fact);
}
factorial(0)
factorial(5)