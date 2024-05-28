
var employees=[
//  id,name,designation,location,experience,salary
    [1,"anu","developer","calicut",3,65000],
    [2,"amal","developer","kochi",5,100000],
    [3,"neha","hr","calicut",2,35000],
    [4,"nikhil","tester","trissur",1,15000],
    [5,"vivek","developer","calicut",4,85000]
]

// console.log(employees);

// 1) Fnd Total number of employees
// 2) display all employees name
// 3) display the names of developer



// 1) Fnd Total number of employees

console.log(employees.length);


// 2) display all employees name


for(var i of employees){
  console.log(i[1]);
}

// 3) display the names of developer

for(var i of employees){
  if(i[2]=="developer"){
    console.log(i[1]);
  }
}