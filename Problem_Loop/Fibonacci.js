
// fibonacci series

// 0 1 1 2 3 5...              ( 0 + 1 = 1  + 1 = 2 + 3 = 5...)
// 10 terms

var n1=0
var n2=1

for(var i=1;i<=10;i++){
    console.log(n1);
    var n3=n1+n2    //n3=1
    n1=n2           //n1=1
    n2=n3           //n2=1
}   

// 0    1    1    2    3    5  ...

// n1   n2   n3
    //  n1   n2   n3

