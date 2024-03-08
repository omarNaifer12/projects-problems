////////////////////////////////////////////////basic//////////////////////////////////////////////////////
function arrayFor(array) {
    for (let i = 0; i < array.length; i++) {
      console.log( array[i])
      
    } 
  
  }  
  function arrayWhile(array) {
      var i=0
      while(i<array.length){
      console.log(array[i])
      i++
      }
       } 
       function sum(array) {
        var element=0
          for (let i = 0; i < array.length; i++) {
          element = element+array[i];
          
        } 
      return element
      }  
      sum([1,2,3])
      function sumEveryOther(array) {
          var sum=0
              for (let i = 0; i < array.length; i=i+2) {
                sum = sum+array[i];
                
              } 
        return sum
        }  
        function sumStartAt(array,index){
          var sum=0
          for (let i=index;i<array.length;i++){
              sum=sum+array[i]
          }
          return sum
        }
        function sumUntil(array, index) {
          var sum=0
          for (let i=0;i<index;i++){
              sum=sum+array[i]
          }
          return sum
        } 
        function subtractReverse(array) {
          var sum=0
          for (let i=array.length-1;i>=0;i--){
              sum=sum+array[i]-i-1;
          }
          return sum
        }
        subtractReverse([1, 2, 3])
        function product(array) {
          var result=1
          for (let i = array.length-1; i >=0; i--) {
              result = result*array[i];
              
              }
              return result
       } 
       function average(array) {
          var sum=0
          for (let i=0;i<array.length;i++){
              sum=sum+array[i]
          }
          return sum/array.length
       } 
       function square(array){
          var result=array
          for (let i = 0; i < array.length; i++) {
              array[i]=Math.pow(array[i],2);
               }
               return result
       }  
       function isArray(array){
        var arr=[]
          for(var i=0;i<array.length;i++)
         {
  arr.push(array[i])
         }
          if (array==arr){
             console.log(arr)
              return true
          }else{
  
              console.log (arr)
              return  false
          }
       }
       function isArray(array) {
       return Array.isArray(array)
       }  
      
      ///////////////////////////////////////////// More Practice/////////////////////////////////////////////
      
       function min(array) {
        var min=array[0]
        for (let i = 0; i < array.length; i++) {
         if(min>array[i])
         min=array[i]
          
        }
        return min
       }  
  
       function max(array) {
          var max=array[0]
          for (let i = 0; i < array.length; i++) {
           if(max<array[i])
           max=array[i]
            
          }
          return max
         }  
         function shortestString(array) {
          var min=array[0].length
          for (let i = 0; i < array.length; i++) {
           if(min>array[i].length)
           min=array[i].length
            
          }
          return min
       }  
       function longestString(array) {
          var long=array[0].length
          for (let i= 0; i < array.length; i++){
              if(long<array[i].length)
              long=array[i].length
               }
               return long
      } 
      function shortestLongest(array) {
         var arr=[array[0],array[0]]
          for (let i = 0; i < array.length; i++) {
             if(array[i].length<arr[0].length)
             arr[0]=array[i]
              if(array[i].length>arr[1].length)
              arr[1]=array[i];
          }
      return arr 
      }  
      function minMax(array) {
          var arr=[array[0],array[0]]
          for (let i = 0; i < array.length; i++) {
             if(array[i]<arr[0])
             arr[0]=array[i]
              if(array[i]>arr[1])
              arr[1]=array[i];
          }
      return arr 
       }  
       function multiplyBy(array, number) {
         for (let i = 0; i < array.length; i++) {
          array[i]=array[i]*number;
          
         } 
         return array
       }  
       function multiplyByIndex(array) {
          for (let i = 0; i < array.length; i++) {
              array[i]=array[i]*i;
              
             } 
             return array
       }
       function lengths(array)
       {
          for (let i = 0; i < array.length; i++) {
              array[i]=array[i].length
              
             } 
             return array
       }
       function totalNumberOfCharacters(array) {
       var sum=0
       for (let i = 0; i < array.length; i++) {
          sum+= array[i].length;
          
       }
       return sum
       }    
      ////////////////////////////////////////////////Advanced//////////////////////////////////////////////  
      function filterEvenLengthWords(array) {
         var arr=[]
          for (let i = 0; i < array.length; i++) {
             
              if(array[i].length%2==0)
  arr.push(array[i])            
          }
          return arr
       }  
       function popLastElement(array) {
         for (let i = 0; i < array.length; i++) {
      array[i].pop()
          
         } 
         return array
       }  
       function pushLastElement(array, element) {
          for (let i = 0; i < array.length; i++) {
              array[i].push(element)
                  
                 } 
                 return array     }  
                 function sumArrays(array) {
                 var Sum=0
                  
      
  for (let i = 0; i < array.length; i++) {
      Sum+=sum(array[i])
  }
      return sum
               }  
               function multiplyBySmallest(array) {
                var Min=min(array)
                for (let i = 0; i < array.length; i++) {
                  array[i]=array[i]*Min
                  
                }
                return array
               } 
               function joinArrays(array) {
                 var  joinArray=[]
                 for (let i = 0; i < array.length; i++) {
                 for (let j = 0; j < array[i].length; j++) {
              joinArray.push(array[i][j])
                
                 }
                  
                 }
                return joinArray
               }  
               function sumOddEven(array) {
                  var sumArr=[0,0]
              for (let i = 0; i < array.length; i++) {
                  if(arr[i]%2===1)
  sumArr[0]+=array[i]
  else 
  sumArr[1]+=array[i]
                  
              }
              return sumArr
               }  
               shortestOfMixed(array)
               {
                  var minLength=""
                  var compare=10000
                  for (let i = 0; i < array.length; i++) {
                      if(array[i].length<compare)
                      {
                          compare=array[i].length
                          minLength=array[i]
                      }
  
                  }
                  console.log(minLength)
              }
              shortestOfMixed(["aa","aaa","bbbb"])
                  function smallestOfMixed(array) {
                    
                      var compare =Number.MAX_SAFE_INTEGER
                      var min=0
                      for (let i = 0; i < array.length; i++) {
                          if( typeof array[i] === 'number'&&array[i]<compare)
                          {
                              compare=array[i]
                              min=array[i]
                          }
                      }
                  console.log(min)
              }
              smallestOfMixed([1,2,7,0,true,'dd','aaa',-7])
              function reverseArrayInPlace(arr) {
                  var i=0
                  var j=arr.length-1
              while(i<j)
              {
                  let swap=arr[i]
                  arr[i]=arr[j]
                  arr[j]=swap
                  i++
                  j--
              }  
          return arr    
          }
          function isPalindrome(arr) {
              var i=0
                  var j=arr.length-1
              while(i<j)
              {
                 if(arr[i]!=arr[j])return false
              }  
  return true
          }
          function rotateArray(arr, positions) {
           var result=[]
           for (let i = 0; i < arr.length; i++) {
            result[(i+posution)%arr.length]=arr[i]
              
           }
           return result
            }
          function arrayIntersection(arr1, arr2) {
  var res=[]
  for (let i = 0; i < array.length; i++) {
     for (let j = 0; j < array.length; j++) {
     if(arr1[i]===arr2[j])
    { res.push(arr1[i])
  break}
      
     }
      return arr
  }
  }
  function findSumPairs(arr, target) {
     var result=[]
      for (let i = 0; i < array.length; i++) {
         
     for (let j = 0; j < array.length; j++) {
      
      var storePair=[arr[i],arr[j]]
      if(i!=j&&arr[i]+arr[j]===target)
      result.push(storePair)
     }
      
     }
  return result  
  }
    
      
  