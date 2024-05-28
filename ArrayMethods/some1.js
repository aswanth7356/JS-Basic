// some()


var employees=[
    //  id,name,designation,location,experience,salary
        [1,"anu","developer","calicut",3,65000],
        [2,"amal","developer","kochi",5,100000],
        [3,"neha","hr","calicut",2,35000],
        [4,"nikhil","tester","trissur",1,15000],
        [5,"vivek","developer","calicut",4,85000]
    ]


// check if there any employee with minimum 5 year of experience ?

console.log(employees.some(i=>i[4]>=5));