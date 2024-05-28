
// Remove Vowels

// luminar  -->  lmnr

const removeVowels=(s)=>{
    var n="";
    for(var i of s){
        if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
            continue
        }else{
            n+=i
        }
    }
    return n
}

console.log(removeVowels("luminar"));
console.log(removeVowels("Hello"));