
// filter and find 

//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,0]
]



// 1) Display price of oreo ?

// filter

console.log(products.filter((i=>i[1]=="oreo"))[0][2]);

// find

console.log(products.find((i=>i[1]=="oreo"))[2]);