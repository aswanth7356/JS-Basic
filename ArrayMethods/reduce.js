
// reduce()  -- to evaluate


var a=[1,2,3,4,5]


// sum

console.log(a.reduce((a,b)=>a+b));            //15

// greatest

console.log(a.reduce((a,b)=>a>b?a:b));        //5


// lowest

console.log(a.reduce((a,b)=>a<b?a:b));        //1

