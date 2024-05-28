
// find elements start with letter a

var students=["anu","vinod","jeevan","amal","aravind","sneha","akhhil"]

const nameWithA=(a)=>{
    var newNames=[]
    for(var i of a){
        if(i[0]=="a"){
            newNames.push(i)
        }
    }
    return newNames
}

console.log(nameWithA(students));