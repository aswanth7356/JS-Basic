
// find sum of even numbers from r1 to r2

var r1=1
var r2=5
sum=0

//  2 4 = 6

for(;r1<=r2;r1++){
    if(r1%2==0){
        // console.log(r1);
        sum+=r1
    }
 
}

console.log(sum);