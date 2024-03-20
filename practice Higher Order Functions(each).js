////////////////////////////////////////////////////////sprint Material1/////////////////////////////////////////////////////////////////
 
 function square(x) { 
       return x * x; 
 } 
 var square = function(x) { 
       return x * x; 
 }; 
 


 var cube=function (x) { 
       return x * x * x; 
 } 
 // 2. 
 fullname= function (first, last) { 
       return first + ' ' + last; 
 } 
 // 3. 
 power=function (base,exp) { 
       if (exp === 0) { 
       return 1; 
       } 
       return base * power(base, exp-1); 
 } 
 // 4. 
 sumCubes=function (numbers) { 
       var total = 0; 
       for (var i = 0; i < numbers.length; i++) { 
             total = total + cube(numbers[i]); 
       } 
       return total; 
 }
function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
       func(array[i]);
       }
}
 function sumSquares(numbers) { 
       var total = 0;
       each(numbers,function(number)
       {
total=total+square(number)
    
       }) 
   
       return total; 
 }

 function sumCubes(numbers) { 
       var total=0
       each(numbers,function(number){
        total=total+cube(number)
       })
       return total;
    }




function product(numbers)
{
    var total=1
    each(numbers,function(number){
        
       total*=number
        // total=total*number
    })
return total
}


function cubeAll(numbers)
{
    for (let i = 0; i < numbers.length; i++) {
       numbers[i]=cube(numbers[i])
        
    }
    return numbers
}
function cubeAll(numbers)
{
    var result=[]
each(numbers,function(number){
    number=cube(number)
    result.push(number)
})
return result
}




function odds(numbers)
{
    var result=[]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]%2!==0) {
            result.push(numbers[i])
            
        }
        
    }
    return result
} 
function odds(numbers)
{
    var result=[]
    each(numbers,function(number){
        if(number%2===1)
        result.push(number)
    })
    return result
}


function sumByAllElementsMultipliedByFour(numbers)
{
    var sum=0
    for (let i = 0; i < numbers.length; i++) {
        sum=sum+(numbers[i]*4)  
    }
}
function sumByAllElementsMultipliedByFour(numbers)
{
var sum=0
each(numbers,function(number){
    sum=sum+(number*4)
})
return sum
}





function sumBy(numbers,f) { 
   var sum=0
 for (let i = 0; i < numbers.length; i++) {
 sum=sum+f(numbers[i])
}
   return sum
} 
 function sumBy(numbers,f) { 
    var sum=0
  each(numbers,function(number){
    sum=sum+f(number)
  })
    return sum
 }

function productBy(numbers,f) { 
  var product=1
  each(numbers,function(number){
    product=product*f(number)
  })
    return product
 }
function capitalizeWords(words)
{
    for (let i = 0; i < words.length; i++) {

        words[i]=words[i].toUpperCase()
        
    }
    return words
} 
function capitalizeWords(words)
{
    var result=[]
    each(words,function(word){
        result.push(word.toUpperCase())
    })
return result
}

function filterEven (numbers)
{
    var result=[]
    each(numbers,function(number){
        if(number%2===0)
        result.push(number)
    })
   return result
} 


function findMax(numbers)
{
    var max=numbers[0]
    for (let i = 1; i < numbers.length; i++) {
       if(numbers[i]>max)
       max=numbers[i]
        
    }
return max
}
function findMax(numbers)
{
    var max=0
    each(numbers,function(number){
        if(number>max)
        max=number
    })
    return max
}


function contains(numbers,number)
{
    for (let i = 0; i < numbers.length; i++) {
      if(numbers[i]===number)
      return true
        
    }
    return false
} 
function contains(numbers,num)
{
    var result=false
    each(numbers,function(number){
        if(number===num)
        result= true
    })
    return result
}
function countWords(strings)
{
    var result={}
    var count=1
    each(strings,function(word){
        result[word]=count
        count++
    })
return result
} 
function flatten(arrays)
{
    var result=[]
    each(arrays,function(arr){
        
        for(var k in arr)
        {
            result.push(k)
        }
    })
    return result
}
////////////////////////////////////////////////////////sprint Material2/////////////////////////////////////////////////////////////////
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}
function indexedExponentials(numbers) { 
    var result=[]
    each(numbers,function(number,index)
    {
result.push(Math.pow(number,index))
    })
return result
}
function evenIndexedOddNumbers(numbers) { 
   var result=[]
   each(numbers,function(number,index)
   {
    if(index%2===0)
    result.push(number)
   })
return result
} 
function evenIndexedEvenLengths(strings) { 
    result=[]
    each(strings,function(word,index){
        if(word.length%2===0&&index%2===0)
        result.push(word)
    })
return result
}
function unique(array)
{
    const map=new Map();
  var result=[]
    for (let i = 0; i < array.length; i++) {
    map.set(array[i],map.get(array[i])+1||1) 
  }
  for(let key of map.keys())
  {
   
result.push(key)  
}
return result
} 
function merge(array1,array2)
{
    var result=[]
    let i=0
    let j=0
    while(i<array1.length&&j<array2.length)
    {
        if(array1[i]<array2[j])
        {result.push(array1[i])
        i++
        }
        else 
        {
            result.push(array2)
            j++
        }
        }
        while(i<array1.length)
        {
            result.push(array1[i])
            i++
        }
        while(j<array2.length)
        {
            result.push(array2[j])
            j++
        }
        return result
} 
function findDuplicates(array)
{
    const map=new Map();
    var result=[]
      for (let i = 0; i < array.length; i++) {
      map.set(array[i],map.get(array[i])+1||1) 
    }
    for(let key of map.keys())
    {
     if(map.get(key)>1)
  result.push(key)  
  }
  return result
}
function palindrome(string)
{
    let i=0
    let j=string.length-1
    while(i<j)
    {
        if(string[i]!==string[j])
        return false
    i++
    j++
    }
    return true
} 
function chunk(array,div)
{
if(div===0)
return array
var result=[]
var chunkArray=[]
let count=0
for(let i = 0; i < array.length; i++) {
chunkArray.push(array[i])
count++
    if(count===div||i===array.length-1)
    {
        count=0
        result.push(chunkArray)
        chunkArray=[]
    }
}
return result
}
function flattenArray(array)
{
    var result=[]
    result=array.flat(Infinity)
    return result
}
function longestIncreasingSubarray(array)
{
    var result=[]
  
    for (let i = 0; i < array.length; i++) {

        var arrForCompareLongest=[]
        while(i<array.length-1&&array[i]<array[i+1])
      {
        arrForCompareLongest.push(array[i])
        i++
      }
      arrForCompareLongest.push(array[i])
      if(result.length<arrForCompareLongest.length)
      result=arrForCompareLongest
        
    }
    return result
}