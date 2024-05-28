
// find count of factors of number ?

function factorsCount(num){
    var count = 0
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
    console.log(count);
}
factorsCount(12)