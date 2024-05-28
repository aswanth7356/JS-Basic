
// email validation

const emailValidation=(mail)=>{
   return mail.endsWith("@gmail.com")&&mail.length>10?"valid":"invalid"
}

console.log(emailValidation("luminar@gmail.com"));


