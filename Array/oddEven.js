
// a=[1,2,3,4,5,6,7]
//  odd     even


const evenOdd=(a)=>{
    var odd=[]
    var even=[]
    for(var i of a){
        i%2==0?even.push(i):odd.push(i)
    }
    console.log(odd);
    console.log(even);
}

evenOdd([1,2,3,4,5,6,7]);