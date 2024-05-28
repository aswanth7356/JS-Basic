
// Create a js function to find sum of prime numbers from r1 to r2

function sumOfPrime(r1,r2) {
    // var r1=1
    // var r2=10

    var sum=0

    for(;r1<=r2;r1++){
        for(var i=2;i<r1;i++)
        if(r1%i==0){
            break
        }
        if(i==r1){
            sum+=r1
        }
    }
    console.log(sum);
}

sumOfPrime(5,10)