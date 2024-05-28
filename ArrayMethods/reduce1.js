

// NB :  output --> Nan   (because variable number ayal mathrame output crct kittullu)



var employees=[
    //  id,name,designation,location,experience,salary
        [1,"anu","developer","calicut",3,65000],
        [2,"amal","developer","kochi",5,100000],
        [3,"neha","hr","calicut",2,35000],
        [4,"nikhil","tester","trissur",1,15000],
        [5,"vivek","developer","calicut",4,85000]
    ]


// find employee with lowest experience ?

console.log(employees.reduce((a,b)=>a[4]<b[4]?a:b)[1]);


// find total salary of all employees ?

console.log(employees.reduce((a,b)=>a[5]+b[5]));              // output --> Nan   (because variable number ayal mathrame output crct kittullu)

console.log(employees.map((i=>i[5])).reduce((a,b)=>a+b));    // output --> 3000000


// find employees with name highest salary ?

console.log(employees.reduce((a,b)=>a[5]>b[5]?a:b)[1]);



