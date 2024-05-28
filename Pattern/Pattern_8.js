
//     *
//    * *
//   * * * 
//  * * * *



var sp=5
for(var i=1;i<=4;i++){
    s=""
    for(var k=1;k<=sp;k++){
        s+=" "
    }
    for(var j=1;j<=i;j++){
        s+="* "
    }
    sp--
    console.log(s);
}