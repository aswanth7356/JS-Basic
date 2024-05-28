
var num=1
for(var i=1;i<=5;i++){
    var s=""
    for(var k=1;k<=num;k++){
        s=s+" "
    }
    for(var j=5;j>=i;j--){
        s+="* "
    }
    num++
    console.log(s);
}