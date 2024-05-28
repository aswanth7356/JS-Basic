
// Map and Filter


var employees=[
    //  id,name,designation,location,experience,salary
        [1,"anu","developer","calicut",3,65000],
        [2,"amal","developer","kochi",5,100000],
        [3,"neha","hr","calicut",2,35000],
        [4,"nikhil","tester","trissur",1,15000],
        [5,"vivek","developer","calicut",4,85000]
    ]


// 1) display all employee name

console.log(employees.map(i=>i[1]));




// 2) display the name of the developers

console.log(employees.filter(i=>i[2]=="developer").map(i=>i[1]));                //here map used for take name of developers froms first output(developers)




// 3) find experience of neha

console.log(employees.filter(i=>i[1]=="neha")[0][4]);                      // [0] =-> nested array ayi kittum aah kittya output ne zero th element ayi edukkukan vendi [0] use




// 4) find salary of employee with id 5

console.log(employees.filter(i=>i[0]==5)[0][5]);





// 5) find designation of employees from calicut

console.log(employees.filter(i=>i[3]=="calicut").map(i=>i[2]));