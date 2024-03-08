var myArray=[1,2,3];
console.log(myArray);
var Arr=[ "dog", "cat", "fox", "monkey"];
Arr[0];
function emptyArray() {
    var array=[];
    return array;
 }  
 function numbersArray(){
var numarr=[1,2,3,4,5]
console.log (numarr) }
numbersArray()
function booleansArray()
{
    var BoolArr=[true,true,true]
    console.log(BoolArr)
}
booleansArray()
function stringsArray() {
var fullName=["omar","naifer"]   
console.log(fullName)
}
function firstElement(array) {
   console.log(array[0])
 }              
 function lastElement(array) {
    console.log(array[array.length-1]) 
 }
 function getNthElement(array, number) {
   console.log( array[number])
 }   
getNthElement([1,2,3,4],1);
function push(array, element) {
    array.push(element) 
 }  
 function indexOf(array, element) {
for(var i=0;i<array.length;i++)
{
if(array[i]===element)
    { return i}
} 
return -1; 
}  
function addElement(array,index,element) {
array.splice(index,0,element)
return array
}
function removeElement(array, index) {
array.splice(index,1)
return array}  
function concatArrays(array1, array) {
return array1 
}  
function getElementsAfter(array, index) {
   var arr=[]
   for(var i=0;i<array.length;i++)
   {
    if(i>1)arr.push(array[i]);
   }
console.log(arr); 
}  
function getElementsBefore(array, index) {
    var arr=[]
    for(var i=0;i<array.length;i++)
    {
    if(i<index)arr.push(array[i])
    else 
return arr;
    }
    return arr;
 }  
 function getAllElementsButFirst(array) {
   array.shift()
   return array
 }  
 function getAllElementsButLast(array) {
   array.pop()
 }  
 function reverseArrays(arr) {
  var array=[]
    for(var i=arr.length-1;i>=0;i--)
  array.push(arr[i])
console.log(array)
  }
  function reverseArray(arr) {
var i=0
var j=arr.length-1
while(i<j)
{
    var s=arr[i]
    arr[i]=arr[j]
    arr[j]=s
    i++
    j--
}
console.log(arr);    
}
    
reverseArray([1,2,3,4,5])
function wordLengths(arr) {
   var result=[]
   for(var i=0;i<arr.length;i++)
   {
    result.push(arr[i].length);
   }
console.log(result)  
}
const words = ["apple", "banana", "cherry"];
wordLengths(words)
function duplicateArrayElements(arr) {
var result=[]
for(var i=0;i<arr.length;i++)
{
 result.push(arr[i])
 result.push(arr[i])
}
console.log(result) 
}
const originalArray = [1, 2, 3];
duplicateArrayElements(originalArray)
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray[2][1][0])
console.log(nestedArray[1])
console.log([1, 2, 3, 5, 6] + [1, 2, 3, 5, 6])
var array=[]
array.push(10);
console.log(array)
function flattenArray(arr) {
var result =arr.flat(Infinity)
return result
}
function removeDuplicates(arr) {
 var DuplicateArr=[]

 var result=[]
 for (let i = 0; i < arr.length; i++) {
  DuplicateArr[arr[i]]++
  
 }

 for (let j = 0; j < DuplicateArr.length; j++) {
 if(DuplicateArr[j]===1)
 result.push(j)
 }
return j
}