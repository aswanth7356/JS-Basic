

var score=59

// 90 - 100 = A+
// 80 - 89  = A
// 70 - 79  = B+
// 60 - 69  = B
// Below 60 = fail
// Above 100 = Invalid

if(score>100){
    console.log("Invalid");
}else if(score>=90){
    console.log("A+");
}else if(score>=80){
    console.log("A");
}else if(score>=70){
    console.log("B+");
}else if(score>=60){
    console.log("B");
}else{
    console.log("fail");
}