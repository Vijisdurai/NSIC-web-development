// Write a loop that takes a string(your name) as input and returns the reversed string.//
const userInput = prompt("enter any string:");
var n=userInput.length-1
var rev_str=""
while(n>=0){
    rev_str+=userInput[n]
    n--
}
console.log(rev_str)

