
// r1=1
// r1=5

// 1 4 9 .... 25


function square(r1,r2) {
    var s = ""
    for(;r1<=r2;r1++){
        s+= " " + r1**2
    }
    return s
}

console.log(square(1,5));