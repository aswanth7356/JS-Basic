

// find the vowels count


const countVowels=(s)=>{
count=0
    for(var i of s){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
        count++
        }
    }

    return count
}

console.log(countVowels("malayalam"));
console.log(countVowels("luminar"));