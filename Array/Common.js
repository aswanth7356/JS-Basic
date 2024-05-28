
// find common elements

var a=[1,2,3,4,5]
var b=[3,4,5,6,7]

// 3 4 5


const commonElmnts=(a,b)=>{
    var common=[]
    for(var i of a){
        for(var j of b){
            if(i==j){
                common.push(i)
            }
        }     
    }
    return common
}

console.log(commonElmnts(a,b));