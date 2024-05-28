
// Map and Filter


//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]


// 1. display all product name

console.log(products.map(i=>i[1]));



// 2. display product whose price <50

console.log(products.filter(i=>i[2]<50).map(i=>i[1]));



// 3. print price of oreo

console.log(products.filter(i=>i[1]=="oreo")[0][2]);



// 4. print costly product name

console.log(products.sort((a,b)=>b[2]-a[2])[0][1]);




//5. display out of stock product

console.log(products.filter(i=>i[3]==0).map(i=>i[1]));



//6. sort products based on stock in decsending order
console.log('sort products based on stock in decsending order');

console.log(products.sort((a,b)=>b[3]-a[3]));



//7. print product having maximum available stock

console.log(products[0][1]);