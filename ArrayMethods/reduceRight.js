

var employees=[
    //  id,name,designation,location,experience,salary
        [1,"anu","developer","calicut",3,65000],
        [2,"amal","developer","kochi",5,100000],
        [3,"neha","hr","calicut",2,35000],
        [4,"nikhil","tester","trissur",1,100000],
        [5,"vivek","developer","calicut",4,85000]
    ]


    // reduceRight
// same salary lla 2 employees ndel reduce.rigth use cheyyuka (appol first person name kittum , last aale kittan just reduce mathram mathi (comparison casil))

console.log(employees.reduceRight((a,b)=>a[5]>b[5]?a:b)[1]);