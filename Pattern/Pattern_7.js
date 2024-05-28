
// *
// * *
// *   *     //i=3  j=2
// * * * *


var num=1
for(var i=1;i<=4;i++){
    s=""
    for(var j=1;j<=i;j++){
        if(i==3 && j==2){
            s=s+"  "
        }else{
            s+="* "
        }

    }
    console.log(s);
}