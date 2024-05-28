
// fizzbuzz

var num=5

// num divisible by 3    fizz
// num divisible by 5    buzz
// num divisible by 15   fizzbuzz


// 30 - fizzbuzz
// 15 - fizzbuzz
// 10 - buzz
// 6  - fizz
// 4  - invalid


if(num%15==0){
    console.log(num,"is fizzbuzz");
}else if(num%5==0){
    console.log(num,"is buzz");
}else if(num%3==0){
    console.log(num,"is fizz");
}else{
    console.log(num,"is Invalid");
}

