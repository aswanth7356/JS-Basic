
var s="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"

// 1 - find number of words in s
// 2 - find longest word in s
// 3 - find count of words on s start with a vowel
// 4 - find count of words on s start with a consenent(vowels allathath)




// 1 - find number of words in s

console.log(s.split(" ").length)



// 2 - find longest word in s


const longestWord=(s)=>{
    var a=s.split(" ")
    var longest=a[0]

    for(var i of a){
        if(i.length>longest.length){
            longest=i
        }
    }
    return longest
}
console.log(longestWord(s));



// 3 - find count of words on s start with a vowel



const startWithV=(s)=>{
    s=s.toLowerCase()
    var count=0
    var a=s.split(" ")
    for(var i of a){
        if(i[0]=="a" || i[0]=="e" || i[0]=="i" || i[0]=="o" || i[0]=="u"){
            count++
        }
    }
    return count
}

console.log(startWithV(s));
console.log(startWithV("hi hello apple luminar"));



// 4 - find count of words on s start with a consenent


const countOfC=(s)=>{
    var a=s.split(" ")
    return a.length-startWithV(s)
}
console.log(countOfC(s));