
var range1=5
var range2=10

// factors of 5 are
// 1
// 5
// ....

for(;range1<=range2;range1++){
    console.log("factors of ", range1,"are");
    for(var i=1;i<=range1;i++){
        if(range1%i==0){
            console.log(i);
        }
    }
}