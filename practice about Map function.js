function each(array,f)
{
   for (let i = 0; i < array.length; i++) {
   f(array[i],i)
   }
}
function map(array,f)
{
    var acc=[]
    each(array,function(element,index){
        acc.push(f(element,index))
    })
    return acc
}


 function ages(people) { 
       return map(people, function(person) { 
             return person.age;});
 }
 function firstNames(people) { 
    return map(people,function(person) { 
          return person.name.first});
}

function lastNames(people) { 
    return map(people,function(person) { 
          return person.name.last});
}

function fullNames(people) { 
    return map(people,function(person) { 
        if(person.name.middle===undefined)
        return person.name.first+" "+person.name.last
        else 
        return person.name.first+" "+person.name.middle+" "+person.name.last

    });
  

}



 function abs(x) { 
       if (x >= 0) { 
             return x; 
       }
       return -x;
}         

function  absolutevalue(array)
{
    return map(array,function(element,index){
       return abs(element)
    })
}

 function max(numbers) { 
    var max=numbers[0]
      for (let i = 1; i < array.length; i++) {
        if (max<numbers[i]) {
            max=numbers[i]
            
        }
       
        
      }
 return max
    } 
    function max(numbers) { 
    var max=0
    each(numbers,function(element,index)
    {
        if(element>max)
        max=element
    })
return max    
}

 function maximums(arrays) { 
       return map(arrays,function(array,index){
       return max(array)
       })
 } 

  function exponentials(numbers) { 
      return map(numbers,function(number,index)
      {
        return Math.pow(number,index+1)
      })
 } 

function reverse(string)
{
    var arrString=string.split("")
    var arrCopy=[]
    for (let i =arrString.length-1 ; i>=0; i--) {
        arrCopy.push(arrString[i])
        
    }
string =arrCopy.join("")
return string
} 
function reverseWords(strings)
{
    var arrStrings=strings.split(" ")
    var convertToString=  map(arrStrings,function(element,index){
        return reverse(element)
    })
    strings=convertToString.join(" ")

return strings
}

function Trypluck(people, key)
{
    if(key.tolower()==='age')
    return ages(people)
else if(key.tolower()==='firstname')
return firstNames(people)
else if(key.tolower()==='lastname')
return lastNames(people)
else if(key.tolower()==='fullname')
return fullNames(people)
}
function pluck(people,key)
{
    return Trypluck(people,key)
}

function each2(arr1,arr2,f)
{
    for (let i = 0; i < arr1.length; i++) {
      f(arr1[i],arr2[i])
        
    }
}
function map2(arr1,arr2,f)
{
    let result=[]
    each2(arr1,arr2,function(el1,el2){
        result.push(f(el1,el2))
    })
    return result
}


