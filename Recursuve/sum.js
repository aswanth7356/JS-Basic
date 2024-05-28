
function sumOfn(n) {   //n=3  n=2  n=1  n=0
    if(n==0){
        return 0
    }
    else{
        return n+sumOfn(n-1)   

        //     3+sumOfn(2)=6              (get 6 => output of before+n (3+3=6))
        //     2+sumOfn(1)=3                (1+2=3)
        //     1+sumOfn(0)=1                    (0+1=1)
        //        0
    }
}

console.log(sumOfn(3));