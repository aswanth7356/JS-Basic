
// var s="luminar technolab"

// 2 elmnt string rotation
// luminar    arlumin
// hello      lohel


const rotate=(s)=>{
    return s.slice(-2)+s.slice(0,-2)
}

console.log(rotate("Luminar"));
console.log(rotate("hello"));

