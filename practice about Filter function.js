
function each(array,f)
{
    for (let i = 0; i < array.length; i++) {
      f(array[i],i)
        
    }

}
function filterArr(array,f)
{
    var result=[]
    each(array,function(element,index)
    {
        if(f(element,index))
        result.push(element)
    })
    return result
}

function even(array)
{
return filter(array,function(element,index){
    return element%2===0
 
})
}
function multiplesOfThree(array)
{
    return filter(array,function(element,index){
        return element%3===0
    })
} 
function positives(array){
    return filter(array,function(element,index){
        return element>=0
    })
} 

function evenLength(array)
{
    return filter(array,function(element,index){
        return  element.length%2===0
    })
} 
 
function odds(array)
{
return filter(array,function(element,index){
    return element%2!==0
 
})
}
function positives(array){
    return filter(array,function(element,index){
        return element<0
    })
} 
function largerThanSix(array)
{
   return filter(array,function(element,index){
        return element>6
    })
}


 function startsWithChar(strings, character) { 
     return filter(strings,function(element,index){
    return element.charAt(0)===character

      })
} 


 function evenIndexedEvenLengths(strings) { 
return filter(strings,function(element,index)
{
    return element.length%2===0&&index%2===0

})
} 


function filterObject(object,f)
{
    var result={}
    for(var key in object)
    {
        if(f(object[key],key))
        result[key]=object[key]
    }
    return result
}
function filter(arg,f)
{
    if( Array.isArray(arg))
    return filterArr(arg,f)
else 
return filterObject(arg,f)
}


 function moveZero(numbers){ 
      const arrWithoutZero=filter(numbers,function(number,index){
        return number!==0
      })  
      const arrZeros=filter(numbers,function(number){
        return number===0
      })  
      return arrWithoutZero.concat(arrZeros)
} 

 function strongPasswords(array){ 
     return filter(array,function(obj,index){
        const capitalLetterRegex = /[A-Z]/;
        const smallLetterRegex = /[a-z]/;
        const numberRegex = /[0-9]/;
        const symbolRegex = /[!@#$%^&*()_+{}[\]|\\:;"'<>,.?/~]/;
   
        return capitalLetterRegex.test( obj.user.password
            ) &&
               smallLetterRegex.test( obj.user.password
                ) &&
               numberRegex.test( obj.user.password
                ) &&
               symbolRegex.test( obj.user.password
                )&&obj.user.password.length>=8
     })
 } 
