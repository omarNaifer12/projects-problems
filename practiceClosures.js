console.log("yooo yoo")
function makeAccount(initial) {
    var balance = initial;
   return function(amount) {
        if (balance - amount >= 0) {
        balance = balance - amount;
        return 'Here is your money: $' + amount;
        }
   return 'Insufficient funds.';
   };
  
}
var count=0
function counter()
{
    count=count+1
    return count
}
function makeCounter(count) {
   
    var counter=count
   return {   
    counterUp: function()
    {
        counter=counter+1
        return counter
    },
    counterDown:function()
    {
        counter=counter-1
        return counter
    },
    reset:function()
    {
        return count
    }
   }
}
var counter1=makeCounter()
var counter2=makeCounter()
function pow(exponent) {
    var Pow=exponent
    function powers(num)
    {
        return Math.pow(num,Pow)
    }
    return powers
}
function zipWith(math,array1,array2)
{
    var min=Math.min(array1.length,array2.length)
  
   function pow(){
    var result=[]
    for(i=0;i<min;i++)
    {
result.push(math(array1[i],array2[i]))
    }
    return result
   }
   return pow
}
function add(x) {
    return   function sum(y) {
         if (typeof y !== 'undefined') {
             x = x + y;
             return sum;
         } else {
             return x;
         }
     };
 }
 function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return "Here's your money: $" + amount;
    }
    return 'Insufficient funds.';
},
    deposit: function(amount) {
         balance = balance + amount;
         return 'Your balance is: $' + balance;
         },
         checkBalance: function()
         {
            return 'Your balance is: $'+balance
         }
        };
}
function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
    }
    function guessMyNumber(upperBound){
        var count=0
    return {giveNumber:function (n) {
    count++;
        if (n > upperBound) {
         return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (n === randInt(upperBound)) {
         return 'You guessed my number!';
         }
    return 'Nope! That wasnt it!';
    },
    giveUp:function()
    {
count=0
    },
    numGuesses:function()
    {
return "the number of gueses :"+ count
    }
}
    }
    function arraySum(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }
    
    function arraySubtract(numbers) {
        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result -= numbers[i];
        }
        return result;
    }
    
    function arrayDivide(numbers) {
        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] !== 0) {
                result /= numbers[i];
            } else {
             
                return null;
            }
        }
        return result;
    }
    
    function arrayMultiply(numbers) {
        let result = 1;
        for (let i = 0; i < numbers.length; i++) {
            result *= numbers[i];
        }
        return result;
    }
    function ReturnResultOperationOfEachOperator(op,array)
    {
        if(op==="multiply") return arrayMultiply(array)
        if(op==="subtract") return arraySubtract(array)
        if(op==="divide") return arrayDivide(array)
        else
     return arraySum(array)

    }
   function ResultOfLeftOpRight(Resleft,op,Resright)
   {
if(op==="multiply")return Resleft*Resright
if(op==="subtract")return Resleft-Resright
if(op==="divide")return Resleft/Resright
else 
return Resleft+Resright
}
function returnTheResultForOneObject(object)
{
    var keysMain=Object.keys(object)
   var arrRes=[]
    for(var key in keysMain )
    {
arrRes.push(ReturnResultOperationOfEachOperator(key,keysMain[key]))
    }
    var result=ReturnResultOperationOfEachOperator(keysMain,arrRes)
}
evaluate(left, top, right)
{
var leftValue=returnTheResultForOneObject(left)
var rightValue=returnTheResultForOneObject(right)
var result=ResultOfLeftOpRight(leftValue,top,rightValue)
}

  