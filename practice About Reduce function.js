
function each(array,f)
{
    for (let i = 0; i < array.length; i++) {
      f(array[i],i)
        
    }
}
 function reduce(array,f,start) { 
       var acc=start;
       each(array,function(element,index) { 
            acc=f(acc, element); 
       });
       return acc; 
}



 function sum(numbers) { 
       return reduce(numbers, function(total, number) { 
             return total + number; 
       }, 0); 
 } 
 function product(numbers) { 
       return reduce(numbers, function(acc, number) { 
             return acc * number; 
       }, 1);
 }

 var people = [ 
       {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
       {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
       {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
       {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
       {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
 ]; 
 function averageAge(people) { 
     return Math.floor(reduce(people,function(acc,element){
        return acc+element.age
     },0)/ people.length)
 }

 function range(start, end) { 
       var acc = []; 
       for (var i = start; i < end; i++) { 
             acc.push(i); 
       } 
       return acc; 
 } 

function factorial(n) { 
var arr=range(1,n+1)
return product(arr)
}
//  HINT: If you cannot think of how to do this, it may help to first try writing the function using each, and then refactor it to use range & reduce.
// More Practice
// 1. The sumBy function from previous lessons can be implemented using each like this:

 function sumBy(numbers, f) { 
       var sum = 0; 
       each(numbers, function(number) { 
             sum = sum + f(number); 
       }); 
       return sum; 
 }
 function sumBY(numbers, f) 
{
    return reduce(numbers,function(acc,element){
      return acc+f(element)
    },0)
}

 function max(numbers) { 
       var max = numbers[0]; 
       each(numbers, function(number) { 
             if (number > max) { 
                   max = number; 
             } 
       }); 
       return max; 
 } 
 function Max(numbers){
      return reduce(numbers,function(max,element){
            if(max<element)
            max=element
      return max
      },numbers[0])
 }

function countOccurrences(string,character)
{
      return reduce(string,function(count,element){
            if(character===element)
            count++
      return count
      },0)
}

function everyNumberOdd(numbers)
{
      return reduce(numbers,function(bool,element){
return bool&&element%2===1
      },true)
} 

function everyNumberPositive(numbers)
{
      return reduce(numbers,function(bool,element){
            return bool&&element>0
      },true)
}
function everyNumberPositive(strings)
{
      return reduce(strings,function(bool,element){
            return bool&&element.length>3
      },true)
}
function everyStringContainCharacterE(strings,character)
{
     return reduce(strings,function(bool,element){
            return bool&&countOccurrences(element,character)>0
      },true)
}
function every(numbers,f)
{
return reduce(numbers,function(bool,element){
return bool&&f(element)===true
      },true)
}
function everyNumberEven(numbers) { 
       return every(numbers, function(number) { 
             return number % 2 === 0; 
       }); 
}
 function joinWith(onto, next, separator) { 
     return onto+separator+next
 } 

 function join(array, separator) { 
var result=reduce(array,function(string,element){
            return joinWith(string,separator,element)
      },"")
     return result.substring(separator.length-1,result.length-separator.length-1)
} 
function mapUseReduce(numbers,f)
{
return reduce(numbers,function(acc,num){
      acc.push(f(num))
      return acc
},[])


      return acc
}
 function countWords(s) { 
       var acc = {}; 
       var words = s.split(' '); 
       for (var i = 0; i < words.length; i = i + 1) { 
             var word = words[i]; 
             if (acc[word] === undefined) { 
                   acc[word] = 1; 
             } else { 
             acc[word]++; 
             } 
       } 
              return acc; 
}
 function CountWords(s)
{
      return reduce(s.split(" "),function(obj,element)
      {
            for (let i = 0; i < element.length; i++) {      
if(obj[element[i]]===undefined)
obj[element[i]]=1
else 
obj[element[i]]++
            }
      },{})
}