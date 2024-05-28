
var r1=1
var r2=4

// check the range contain an element that is divisible by 5

// flag=0
// while (r1<=r2) {
//     // console.log(r1);
//     if(r1%5==0){
//         // console.log("elemt present");
//         flag=1
//     }
//    if(flag==0){
//     console.log("elemt not present");
//    }else{
//     console.log("elemt present");
//    }
//     r1++
// }

flag=0
for(;r1<=r2;r1++){
    if(r1%5==0){
     flag=1
    }
}
if(flag==0){
    console.log("elmnt not prsnt");
}else{
    console.log("elmnt prsnt");
}