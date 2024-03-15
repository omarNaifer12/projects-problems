// generateID is a *function* that, when invoked, returns a number representing
// an ID.
var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.

// EXERCISE 1
var todos = [];
var UnarchiveTodo=[]
function todoFactory(task) {
  return {
    task: task,
    complete: false,            // todos always start as incomplete
    id: generateID(),
               // use generateID to make an ID for this todo
  };
}
function pushTodoIntoArray(task,array)
{
  object=todoFactory(task)
array.push(object)
}
// EXERCISE 2
function displayTodo(todo) {
  var  result=""
  
    
      result+="the id of todo is :"+todos.id+" "+"the task of the todo is :"+todos.task+" "+
      "the todo complete? :"+todos.complete+"is archived? "+todo.archived 
      return result
    
   
  }


// var myTodoList = makeTodoList(???);

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos
function makeTodoList(initialTodos) {
  var todos = initialTodos;

  return {
    display:function() {
      var result=""
      for (let i = 0; i < todos.length; i++) {
        result+="the indice is :"+i+displayTodo(todos[i])
        result+="\n"
      }
      return result
    },
    add: function(task) {
      pushTodoIntoArray(todos,task)
    },
    toggleComplete:function(ID)
    {
for (let i = 0; i < todos.length; i++) {
if(todos[i].id===ID)
{
  todos[i].complete=(!todos[i].Complete)
  return true
}
 return false 
}
    }
  };
}
function ClearAllTodoCompleted(todos)
{
  for (let i = 0; i < todos.length; i++) {
   if(todos[i].complete===true)
   todos.splice(i,1)  
  }
  return todos
}
function unarchiveTodo(ID,arr)
{
  for (let i = 0; i < todos.length; i++) {
   if(todos[i].id===ID)
   {
    arr.push(todos[i])
  return true 
  }
    
  }
  return false
}
function displayArchived(arrUnarchive)
{
  var result=""
      for (let i = 0; i < arrUnarchive.length; i++) {
       
        result+="the indice is :"+i+displayTodo(arrUnarchive[i])
        result+="\n"
       
      }
      return "the todos archived : "+"\n"+result
}

function move(todos,from,to)
{
  if(from<0||to>=todos.length)
  return "enter real indices "
todos.splice(to,0,todos[from])
todos.splice(from,1)
}
// =============================================================================
// HELPER FUNCTIONS
function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
/////////////////////////////////////////////////more Practice///////////////////////////////////////////
var arrBooks=[]
function makeStore() {
  var books=arrBooks
  return{
    display:function(numBook)
    {
      if(numBook>=books.length)
      return "its large length "
var result=""
for (let i = 0; i < numBook; i++) {
 
  
}
    },
    displayBook:function(book)
    {
var result=book.Name+"/"+book.cattegory+"/"+book.price+"/"+book.ID
return result.toString()
 },
 displayBooks:function(books)
 {
  var result=""
  for (let i = 0; i < books.length; i++) {
   result+=this.displayBook(books[i])
   result+="\n"
    
  }
 }
}
}
