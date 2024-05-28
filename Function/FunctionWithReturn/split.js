
// Create 2 functions
// function1 - Check number is posi or negative
// function2 - apply function1 to check numbers from r1 to r2 are posi or neg


function posNeg(num) {
    
    if(num>0){
        return "positive "+num
    }else if(num<0){
        return "negative "+num
    }else{
        return "its zero"+num
    }
}

// console.log(posNeg(1));


function rangeCheck(r1,r2) {
    for(;r1<=r2;r1++){
        console.log(posNeg(r1));
    }
}

rangeCheck(-3,3)