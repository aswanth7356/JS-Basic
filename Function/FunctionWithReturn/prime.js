
// prime check using return

function primeCheck(num) {
    for(var i=2;i<num;i++){
        if(num%i==0){
            return "not prime"
        }
    }
    return "prime"
}

console.log(primeCheck(5));
console.log(primeCheck(4));