
// find square of the elements using function

// var a=[1,2,3,4,5,6]
// square[1,4,9....]

const squareArray=(a)=>{
    var square=[]
    for(var i of a){
        square.push(i**2)
    }
    return square
}

console.log(squareArray([1,2,3,4,5,6]));