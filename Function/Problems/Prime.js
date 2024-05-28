
// Prime number checking ?

function primeCheck(num) {
    var i
    for(i=2;i<num;i++){
        if(num%i == 0){
           break
        }
    }
    if(i==num){
        console.log("Prime");
    }else{
        console.log("composite");
    }
}

primeCheck(10)
primeCheck(5)