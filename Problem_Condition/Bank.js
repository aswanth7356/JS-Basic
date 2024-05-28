// BANK PROBLEM

var balanceAmount=100000
var withdraw=2000

if (withdraw<=balanceAmount) {
    balanceAmount=balanceAmount-withdraw
    console.log("Your Account Has Been Debited with amount",withdraw);
    console.log("Your Account balance is",balanceAmount);
}else{
    console.log("Insufficient balance")
}