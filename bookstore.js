// Enter your code below here and ABOVE the HELPER FUNCTIONS



// ==============================================================================
// HELPER FUNCTIONS

function generateBooks(n) {
  // __rawBooks is defined in books.js
 var generateID = makeCounter();
  var booksArray = __rawBooks.split(',');
  var numBooks = n || booksArray.length - 1;
  var categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical'];

  function makeBook(bookName, id) {
    var tuple = bookName.split('by');

    return {
      id: id,
      title: tuple[0].trim(),
      author: tuple[1].trim(),
      price: parseFloat(randN(10, 35).toFixed(2)),
      category: randElt(categories)
    };
  }

  return reduce(take(booksArray, numBooks), function(books, s, i) {
    return conj(books, makeBook(s, generateID()));
  }, []);
}


/////////////////////////////////////
function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
function makeStore(array) {
var books=array
  return{
  book:generateBooks(n),
  displayBook: function(book)
  {
    var result=book.title+", by "+book.author+"/ "+ "Category"+" "+book.categories+"/"+
    "price:"+" "+book.price.toString()+"/ "+"ID: "+" "+book.id.toString()
    return result
  },
  displayBooks:function(books)
  {
    var result=""
    for (let i = 0; i < books.length; i++) {
     result+=this.displayBook(books[i])
     result+="\n"
      
    }
  return result
  },
  display:function(n)
  {
    if(n>=books.length||n<0)return "enter a valid length"
return this.displayBooks(books)
  },

SearchForTheQueryInAllBooks:function(books,query)
{
for (let i = 0; i < books.length; i++) {
if(isMatch(books[i],query))
return this.displayBook(books[i])
  
}
return "not found "
},
getBook:function(ID)
{
  for (let i = 0; i < array.length; i++) {
    if(books[i].id===ID)
    return books[i]
    
  }
},
removeBook:function(ID)
{
  return filter(books,function(book,ID){
    return book.id!==ID
  })
}


}
}
function SearchForTheQueryInAllBooksUseFilter(books,query) {
  return filter(books,function(book,query){
  return isMatch(book,query)
})
}
function isMatch(book, query) {
  var s = (book.title + book.author + book.category).toLowerCase();
  return s.indexOf(query.toLowerCase()) >= 0;
}
function makeCart()
{
  var cart=[]
 return { 
  addBook:function(book)
  {
    cart.push(book)
    return cart
  },
  displayBook: function(book)
  {
    var result=book.title+"/ "+
    "price:"+" "+book.price.toString()+"/ "+"ID: "+" "+book.id.toString()
    return result
  },
  displays:function()
  {
    var result=""
    for (let i = 0; i < cart.length; i++) {
     result+=this.displayBook(cart[i])
     result+="\n"
      
    }
  return result
  },
  removeBook:function(ID)
{
  return filter(cart,function(book,ID){
    return book.id!==ID
  })
},
  addBookFromBookStore:function(books,query)
  {
var obj=SearchForTheQueryInAllBooksUseFilter(books,query)
if(Object.keys(obj).length===0)
return "the  book not found  "
else 
cart.push(obj) 
},
totalPrice:function()
{
  var sum=cart.reduce((a,b)=>a+b.price,0,);
return sum
},
removeTheBookStoreBought:function(books)
{
  for (let i = 0; i < cart.length; i++) {
 makeStore(books).removeBook(cart[i].id)
    
  }
  return books
},
clear:function()
{
  cart.length=0
},
returnAllBooks:function()
{
  for (let i = 0; i < cart.length; i++) {
   console.log(cart[i])
    
  }
}


}
} 


