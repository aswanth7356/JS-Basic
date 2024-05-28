
// Prime Number Checking

// 2  -  1  2
// 3  -  1  3
// 4  -  1  2  4  (Composite)  means not a prime no.
// 5  -  1  5
// 6  -  Composite
// 7  -  1  7




// var num=5
// var flag=0

// for(var i=2;i<num;i++){
//     if(num%i==0){
//         flag=1
//         break
//     }

// }
//     if(flag==1){
//         console.log("Composite");
//     }else{
//         console.log("Prime");
// }   




// Without using Flag 

var num=7

if(num==1){
    console.log("Composite");
}else{
    for(var i=2;i<num;i++){
        if(num%i==0){
            break 
        }
    }

    console.log(i);

    if(i==num){
        console.log("Prime");
    }else{
        console.log("Composite");
    }
    
}