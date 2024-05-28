
var expenses=[14000,21000,12000,34000,11000]

// find total expense
// find maximum expense
// find minimum expense


// find total expense

const total=(a)=>{
    sum=0
    for(var i of a){
        sum+=i
    }
    return sum
}

console.log(total(expenses));


// find maximum expense

var maximum=(a)=>{
    var max=0
    for(var i of a){
        if(i>max){
            max=i
        }
    }
    return max
}

console.log(maximum(expenses));


// find minimum expense

var minimum=(a)=>{
    var min=a[0]
    for(var i of a){
        if(i<min){
            min=i
        }
    }
    return min
}

console.log(minimum(expenses));

