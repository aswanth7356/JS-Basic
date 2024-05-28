
// r1=3
// r2=7

// (5 ne kal kuravanel 1 kurayanam , 5 ne kal kooduthal anel 1 + avanam , 5 anel 5 thanne)

// 2 3 5 7 8  


function range(r1,r2) {
    var s=""
    for(;r1<=r2;r1++){
        if(r1>5){
            s+= r1+1+" "
        }else if(r1<5){
            s+= r1-1+" "
        }else{
            s+=r1+" "
        }
    }
    return s
}

console.log(range(3,7));