
// factorial

const factorial=(num)=>{
    var fact=1
    for(;num>0;num--){
        fact*=num
    }

    return fact
}

console.log(factorial(5));
console.log(factorial(6));