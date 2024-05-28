
// print the elements greater than 10


var a=[
    [1,2],[34,4],[45,9],[5,10]
]
console.log(a);




for(var i of a){
    for(var j of i){
        if(j>=10){
            console.log(j);
        }
    }
}