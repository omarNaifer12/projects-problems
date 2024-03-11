



function sum(number) {
    if(number===0)
   { 
    return(0);
   }
 return number +sum(number-1)
} 
function factorial(number) {
    if(number===0)
    { 
     return(1);
    }
  return number *factorial(number-1)
 }  
 function repeatString(string, number) {
   if(number===0) 
  { 
    return ("");
  } 
return string +repeatString(string,number-1)
} 
function multiplyBy10(firstNumber, secondNumber) {
    if(secondNumber===0){
        return (firstNumber)
    }
    return 10*multiplyBy10(firstNumber,secondNumber-1)
 }  
 function sumBetween(start, end) {
  if(start>end)
  {
    var swap=start;
    start=end;
    end=swap;
  }
  if(start===end)
  {
    return (end);
  }
  return start+sumBetween(start+1,end)
 }
 function add(number1, number2) {
if(number1===0)
{
return (number2);
}

return 1+add(number1-1,number2);
}
function isEven(number) {
    if(number==0)
    {
        return (true)
    }
    else if(number==1)
    {
        return (false);
    }
return isEven(number-2); 
}  
var arr=[]
function range(start, end) {
  if(start===end-1)
  {
    return (arr)
  }
 arr.push(start+1)
 return range(start+1,end)
 }  
 function multiply(number1, number2) {
    if(number1===0)
    {
    return (0);
    }
    
    return number2+add(number1-1,number2);
    }
    var res=0
    function stringLength(string) {
        if(string==="")
       { return 0}
        
    return 1+stringLength(string.slice(1));
     }  
     function modulo(number1, number2) {
       if(number1<number2)
       {
        return (number1)
       }
       return modulo(number1-number2,number2)
     }  
   var res=0
     function countChars(string, char) {
       var res=0
        if(string===""){
            return(1)
        } 
        if(string.charAt(0)===char){
           res=res+1
        }
        return countChars(string.slice(1),char)
     }
     var i=0  
     function indexOf(string, char) {
       if(string[i]===char)
       {
        return i
       }
       if(i===string.length)
       {
        return undefined
       }
       i++;
       return indexOf(string,char)
     }  

     function power(base, exponent) {
        if(exponent===0)
        {
            return 1
        }
        return base*power(base,exponent-1)
     }  
     var result=""
     
     function reverseString(string) {
       if(string==="")
       {
        return result
       }
        result=result+(string.charAt(string.length-1));
     
        return reverseString(string.slice(0,-1));
     }  
     reverseString("hello")
     function greatestCommonDivisor(number1, number2) {
        if(number1<number2){}
     }  
     function numberOfHandshakes(n) {
       if(n===0)
       {
        return 0
       }
       return n-1+ numberOfHandshakes(n-1)
     }  