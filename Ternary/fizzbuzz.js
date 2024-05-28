
// fizzbuzz

function fizzbuzz(num) {
    return num%15==0?"fizzbuzz":num%5==0?"buzz":num%3==0?"fizz":"invalid"
}

console.log(fizzbuzz(30));
console.log(fizzbuzz(10));
console.log(fizzbuzz(6));
console.log(fizzbuzz(4));