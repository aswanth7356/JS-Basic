
// 1
// 2 3
// 4 5 6
// 7 8 9 10


var num=1
for(var i=1;i<=4;i++){
    s=""
    for(var j=1;j<=i;j++){
        s+=num+" "
        num++
    }
    console.log(s);
}