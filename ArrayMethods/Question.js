
var s="Our mission is to provide 100% placements to students those who enrol for our specialised courses."

// find longest word in s

console.log(s.split(" ").reduce((a,b)=>a.length>b.length?a:b));