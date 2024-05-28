
// find sum of even numbers from r1 to r2

// 2 4 6 8 10 = sum

var r1=1
var r2=10

sum=0
while(r1<=r2){
    if(r1%2==0){
    sum+=r1
    }
    r1++
}
console.log(sum);