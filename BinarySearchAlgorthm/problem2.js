

// sum  pair problem lesser time complexity


var a=[1,3,2,5,4,6]
// [1,2,3,4,5,6]
// sum=9
// s=9

a.sort((a,b)=>a-b)    //1,2,3,,4,5,6
var sum=15
var low=0
var upper=a.length-1
var count=0
while(low<upper){
    count++
    var newSum=a[low]+a[upper]
    if(sum==newSum){
        console.log(a[low],a[upper]);
        low++
        upper--
    }
    else if(newSum<sum){
        low++
    }
    else if(newSum>sum){
        upper--
    }
}
console.log(count)