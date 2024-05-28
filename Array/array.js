
var a=[1,2,6,5,1,"hello",false]
console.log(a);

// heterogeneous
// linear data structure


console.log(a.length);  // output - 7

console.log(a[1]);  // output - 2

console.log(a.slice(0,-2));  // output - [ 1, 2, 6, 5, 1 ]

for(var i in a){
    console.log(i);         // output - 0 1 2 3 4 5 6
}


for(var i of a){
    console.log(i);         // output - 1,2,6,5,1,"hello",false
}
