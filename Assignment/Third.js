
var num=5
for(var i=1;i<=4;i++){
    var s= ""
    for(var k=1;k<=num;k++){
        s=s+ " "
    }
    for(var j=1;j<=i;j++){
        if((i==4 && j==2) || (i==4 && j==3) || (i==3 && j==2)){
            s=s+ "  "
        }else{
            s=s+ "* "
        }
        
    }
    num--
    console.log(s);
}

var num=1
for(var i=1;i<=3;i++){
    var s=""
    for(k=3;k>=num;k--){
        s+= " "
    }
    for(var j=3;j>=i;j--){
        if((i==1 && j==2)){
            s+="  "
        }else{
            s+="* "
        }  
    }
    num--
    console.log(s);
}
