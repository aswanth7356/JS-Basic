
// find sum of non-prime numbers from r1 to r2

var r1=5
var r2=10

// 6 8 9 10 = sum

sum=0


for(;r1<=r2;r1++){            
    for(var i=2;i<r1;i++){    
        if(r1%i == 0){
            break
        }
    }
    if(r1!=i){
        sum+=r1
    }
}

console.log(sum);