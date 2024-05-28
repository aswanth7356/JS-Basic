
// Search cheyyunna element aah array il ndo nn find cheyyanam and time complexity nokaanam




function binarySearch(a,e){                   // e --> consider search cheyynna element
    a.sort((a,b)=>a-b)
    var low=0                                // index number first element
    var upper=a.length-1                     // index number last element
    var count=0

    while(low<=upper){
       count++
       middleIndex=Math.floor((low+upper)/2)    // floor -->  point number ne convert cheyyan
       if(a[middleIndex]==e){
        return "present"+count
       }
       else if(e>a[middleIndex]){
        low=middleIndex+1
       }
       else if(e<a[middleIndex]){
        upper=middleIndex-1
       }
    }
    return "not present"+count
}

console.log(binarySearch([9,6,3,2,8,1,5],100));


