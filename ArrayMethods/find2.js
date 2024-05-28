


var employees=[
    //  id,name,designation,location,experience,salary
        [1,"anu","developer","calicut",3,65000],
        [2,"amal","developer","kochi",5,100000],
        [3,"neha","hr","calicut",2,35000],
        [4,"nikhil","tester","trissur",1,15000],
        [5,"vivek","developer","calicut",4,85000]
    ]


// 1) Experience of neha ?

console.log(employees.find((i=>i[1]=="neha"))[4]);

// 2) find salary of employee with id 5

console.log(employees.find((i=>i[0]==5))[5]);