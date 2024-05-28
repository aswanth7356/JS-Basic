
// indian phone Number validation

// "+917356644734"

const phoneValidation=(phn)=>{
    return phn.startsWith("+91")&& phn.length==13?"valid":"invalid"
}

console.log(phoneValidation("+917356644734"));
console.log(phoneValidation("+517356644734"));
console.log(phoneValidation("+9173566447344166"));


