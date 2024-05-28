
// find factorial of numbers from r1 to r2 

var r1=5
var r2=10

// 5!
// 6!
// .....
// 10!

for(;r1<=r2;r1++){
    // r1
    fact=1      //fact=1
    for(var i=1;i<=r1;i++){   // i=1,2,3,4,5,6
        fact*=i     //fact=120
    }
    console.log(r1, "! =" , fact);
}