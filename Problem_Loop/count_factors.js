// find count of factors of a number

// var num=8

// 1 2 4 8
//  =4

var num=18
var count=0

for(var i=1;i<=num;i++){
    if(num%i==0){
        count++                 //count=count+1
    }
}

console.log("count of the factor of ",num, " is ", count)    