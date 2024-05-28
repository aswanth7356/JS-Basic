
var employees=[
    //  id,name,designation,location,experience,salary
        [1,"anu","developer","calicut",3,65000],
        [2,"amal","developer","kochi",5,100000],
        [3,"neha","hr","calicut",2,35000],
        [4,"nikhil","tester","trissur",1,15000],
        [5,"vivek","developer","calicut",4,85000]
    ]


// find employee with greatest experience

console.log(employees.sort((a,b)=>b[4]-a[4]));  


// find employee name with greatest experience

console.log(employees.sort((a,b)=>b[4]-a[4])[0][1]);            // amal


// find employee with lowest salary

console.log(employees.sort((a,b)=>a[5]-b[5])[0][1]);            // nikhil
