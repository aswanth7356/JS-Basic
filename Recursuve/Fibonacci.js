
function fibonacci(n) {  //3
    if(n<=1){
        return n
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2)
        //              1    +   1  =  2
    }
}

for(var i=0;i<=9;i++){           // i=1 
    console.log(fibonacci(i));     // fibonacci(3)
}

// 0 1 1 2