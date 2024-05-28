
var num=5
for(var i=1;i<=4;i++){
    var s=""
    for(k=4;k>=num;k--){
        s+=" "
    }
    for(var j=4;j>=i;j--){
        if((i==2 && j==3)){
            s+="  "
        }else{
            s+="* "
        }  
    }
    num--
    console.log(s);
}