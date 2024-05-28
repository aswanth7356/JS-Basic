var r1=5
var r2=10

for(;r1<=r2;r1++){
    console.log("factors of",r1,"are");
    for(var i=r1;i<=r2;i++){
        if(r2%i==0){
            console.log(i);
        }
    }
   
}