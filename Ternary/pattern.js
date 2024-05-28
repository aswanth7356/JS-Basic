
function pattern(r1,r2) {
    var s=""
    for(;r1<=r2;r1++){
        r1>5?s+=r1+1+" ":r1<5?s+=r1-1+" ":s+=r1+" "
    }
    return s
}

console.log(pattern(3,7));
console.log(pattern(1,10));