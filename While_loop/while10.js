
// find count of factors of a number

var num=8

// 1 2 4 8  =   

var i=1
var count=0

while(i<=num){
    if(num%i==0){
        count++
    }
    i++
}
console.log(count);