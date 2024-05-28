
// find square of prime numbers from r1 to r2

var r1=1
var r2=10

// 4 9 25 ....

for(;r1<=r2;r1++){
    for(var i=2;i<r1;i++){
        if(r1%i==0){
            break
        }
    }
    if(r1==i){
        console.log(r1*i);  //or r1**2
    }
}