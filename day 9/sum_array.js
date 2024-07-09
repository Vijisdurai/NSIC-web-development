//Given an array of numbers[1, 2, 3, 4, 5], write a loop to calculate the sum of all the numbers.//
var arr=[1,2,3,4,5];
var sum=0
var n=arr.length-1
while(n>=0)
{
    sum+=arr[n]
    n--
}
console.log(sum)
