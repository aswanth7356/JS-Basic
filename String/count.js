
// write a function  to find the count of "a" in a string


const count=(s)=>{
    var count=0
    for(var i of s){
        if(i=="a"){
            count++
        }
    }
    return count
}

console.log(count("Luminar"));
console.log(count("Luminaaaar"));