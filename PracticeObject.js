/////////////////////////////////////////////////////Basic////////////////////////////////////////////////////////////////////

console.log("")
var user ={
    firstName :'Yan',
    lastname: 'Fan' 
     }; 

var alphabet ={
    a: 1,
    b:  2,
    c:  3, 
    d:  4 
     }; 
var dog ={ 
     animal: 'dog', 
     noise: 'bark', 
     age: 3, 
     type: 'Golden Retriever', 
     color: 'Yellow' 
};

var person={
    firstName:'omar',
    lastName:'naifer',
    hometown:'sfax',
age:23
}
person. favoriteFood="rice"
console.log(person)
function emptyObject(){  
   var obj={};
   return obj
  }  
  emptyObject();
  function addProperty(object, key) {   
    object[key]=true
  }
var myObject={
    animal:'cat',
    food:'turkey',
    age:3
}
addProperty(myObject,'kittens')
console.log(myObject)
console.log(myObject.key)
function deleteProperity(object,key)
{
    delete object[key];
}
var myObject={
    animal:'cat',
    food:'turkey',
    age:3
}
deleteProperity(myObject,'age')
console.log(myObject)
function addObjectProperty(object1,key,object2)
{
object1[key]=object2
}
var person1 = {
    name: 'Ahmad',
    role: 'worker'
};

var person2 = {
    name: 'Fadi',
    role: 'manager'
};

console.log(person1.manager);
addObjectProperty(person1,'manager',person2)
console.log(person1)
function addFullNameProperty(object) {
    if('firstName'in object&&'lastName'in object)
    object['fullName']=object.firstName+' '+object.lastName 
}  

var person = {   
    firstName: 'Leena',  
    lastName: 'Atia'  
}

console.log(person.fullName)   
addFullNameProperty(person) 
console.log(person) 
console.log(person.fullName)
function addArrayProperty(object, key, array)
{
    object[key]=array
}
var myObject = {} 
var myArray = [1, 3] 
console.log(myObject.myProperty)  
addArrayProperty(myObject, 'myProperty', myArray);
console.log(myObject.myProperty) 

function printAllProperties(object)
{
    for(var key in object)
    {
        console.log(object[key])
    }
}
var person = {   
    firstName: 'Leena',  
    lastName: 'Atia'  
};

printAllProperties(person);
////////////////////////////////////////////////////////////More Practice////////////////////////////////////////////////////////////
function removeNumbersLargerThan(number,object)
{
    for(var key in object)
    {
        if(typeof object[key]==="number"&&object[key]>number)
        delete object[key]
    }
}
var obj = {   
    a: 8,  
    b: 2,  
    c: 'montana'  
};
console.log(obj); 
removeNumbersLargerThan(5, obj);
console.log(obj);
function removeAllEvenValues(object) {
    for(var key in object)
    {
        if(typeof object[key]==="number"&&object[key]%2===0)
        delete object[key]
    }
}  
function removePropertiesNotEqualTo10(object)
{
    for(var key in object)
    {
        if(object[key]!==10)
        delete object[key]
    }    
}
function removeStringsLongerThan(number,object)
{
    for(var key in object)
    {
        if(typeof object[key]==="string"&&object[key].length>number)
        delete object[key]
    }    
}
var obj = {   
    a: 'Texas',  
    b: 2,  
    c: 'montana' 
};

removeStringsLongerThan(6, obj);
console.log(obj)
function removeAllNumbers(object)
{
    for(var key in object)
    {
        if(typeof object[key]==="number")
        delete object[key]
    }    
}
var obj = {   
    a: 9,  
    b: 2,  
    c: 'montana' 
};

removeAllNumbers(obj);
console.log(obj);
function removeArrays(object)
{
    
    for(var key in object)
    {
        if( Array.isArray(object[key]))
        delete object[key]
    }    
    
}
function getFirstElementOfProperty(object,key)
{
    if(Array.isArray(object[key]))
   {if(object[key].length>0) 
    return object[key][0];
    else 
    return undefined
   }
    else 
return undefined
}
function getNthElementOfProperty(object,key,number)
{
    if(Array.isArray(object[key]))
    {
        if(object[key].length>0&&(number>=0&&number<object[key].length))
        return object[key][number]

    
    }
    else 
    return undefined
}
////////////////////////////////////////////////////////////////Advanced/////////////////////////////////////////////////////////////////
function isPropertyPresent(object,key)
{
    if(object.hasOwnProperty(key))
    return true;
else 
return false
}
function getAllKeys(object)
{
    var result=[]
    result=Object.keys(object)
    return result
}
function getAllValues(object)
{
    var result=[]
    result=Object.values(object)
    return result
}
function transformFirstAndLast(array)
{
    var object={
        [array[0]]:array[array.length-1]
    }
    return object
}
function extend(object1,object2)
{
    for(var key in object2)
    {
        if(!object1.hasOwnProperty(key))
        object1[key]=object2[key]
    }
return object1
}
function countAllCharacters(string)
{
    var object={}
    for(let i=0;i<string.length;i++)
    {
        if(object.hasOwnProperty(string[i]))
        object[string[i]]++;
    else 
    object[string[i]]=1
    }
    return object
}
function countWord(string)
{
    var object={}
    var word=""
    for (let i=0;i<string.length;i++) {
        if(string[i]!==" ")
        word+=string[i]
    else if(word!=="") 
    {
        
        if(object.hasOwnProperty(word))
        object[word]++
    else
    object[word]=1
word=""    
}
    }    
if(word!=="")
        {
            if(object.hasOwnProperty(word))
            object[word]++
        else
        object[word]=1
        }
        console.log(object)
}
function convertObjectToList(object)
{
    var result=[]
    for(var key in object)
    {
        var arr=[]
        arr.push(key)
        arr.push(object[key])
        result.push(arr)
    }
    return result
}


function select(array,object)
{
    objResult={}
for (let i = 0; i < array.length; i++) {
    if(object.hasOwnProperty(array[i]))
    {
        if(!objResult.hasOwnProperty(array[i]))
        objResult[array[i]]=object[array[i]]
    }
    
}
return objResult
}