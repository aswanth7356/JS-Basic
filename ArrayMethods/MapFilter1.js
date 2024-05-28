
// Que : 3 ne kal kuravanel 1 decrement cheyth print avanam , 3 ne kal kooduthal anel 1 increment avanam

var a=[1,2,3,4,5]

// [0,1,3,5,6]

console.log(a.map(i=>i<3?i-1:i>3?i+1:i));