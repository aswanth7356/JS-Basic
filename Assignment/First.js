
var num=6
for(var i=1;i<=4;i++){
    s=""
    for(k=1;k<=num;k++){
        s+=" "
    }
    for(var j=1;j<=i;j++){
        s+="* "
    }
    num-=2
    console.log(s);
}