
var employees=[
    //  id,name,designation,location,experience,salary
        [1,"anu","developer","calicut",3,65000],
        [2,"amal","developer","kochi",5,100000],
        [3,"neha","hr","calicut",2,35000],
        [4,"nikhil","tester","trissur",1,15000],
        [5,"vivek","developer","calicut",4,85000]
    ]


// find experience of neha
// find salary of employee with id 5
// find designation and name of employee from calicut


// 1) find experience of neha

for(var i of employees){
    if(i[1]=="neha"){
        console.log(i[4]);
    }
}


// 2) find salary of employee with id 5

for(var i of employees){
    if(i[0]==5){
        console.log(i[5]);
    }
}


// 3) find designation and name of employee from calicut

for(var i of employees){
    if(i[3]=="calicut"){
        console.log(i[1],i[2]);
    }
}
