
var a=[1,3,2,5,4,6]
var sum=6
count=0                         // count is using here for iteration count checking(time complexity)
for(var i of a){
    for(var j of a ){
        count++
        if(i+j==sum){
            console.log(i,j);
        }
    }
}

console.log(count); //36



