
// Arithmatic operator

var num1 = 5
var num2 = 2

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);


// using string with variables

console.log("add result",num1+num2);
console.log(`sub result ${num1-num2}`);            // bactick     
console.log("div result"+num1/num2);


// Relational Operator

console.log(5>7);
console.log(5<7);
console.log(1>=true);           // true maeans 1   and  false means 0
console.log(1<=false);
console.log(1==true);
console.log(true!=false);
console.log(10=="10");         // Check only the content
console.log(10==="10");        // Check content and data type


// Compound assignment Operator

var num = 2
// num=num+2
console.log(num)


// num = num**1  -->  num**=1
// num = num/4   -->  num/=4


// Increment or decrement Operator

var num =2
num++
num++
num--
console.log(num);



var num=5
console.log(num++)  // display then increment

var num=5
console.log(++num)  // increment then display



// Logical Operator  &&


console.log(6>4 && 5>8);

        // true  && false

// true && false  =  false
// true && true  =  true
// false && true  =  false
// false && false  =  false


// Logical Operator  ||

console.log(5<3  ||  8<2);

        // true || false

// true || false  =  true
// false || true  =  true
// true || true  =  true
// false || false =  false


// Logical Operator  !

console.log(!(5>6  ||  7>8));

        //   false || false
    
//  !false = true
//  !true = false






console.log(!!0);   // false - converting number to boolean using !!    nb : positibe numbers are true (1 nte mukalilit)  negative numbers are false (0 nte thayot) 
console.log(!!1);   // true  