
// check an element is present or not


var a=[9,6,3,2,8,1,5]

const elmntCheck=(a,e)=>{
    var count=0
    for(var i of a){
        count++
        if(i==e){
            return "present"+count
        }
    }
    return "not present"+count
}

console.log(elmntCheck(a,100));  // 7