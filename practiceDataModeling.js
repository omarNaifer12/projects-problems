console.log("")
function createBook(id,Title ,Author, MSRP,Genre ,NumberofPages ,Description)
{
    return { 
        id:id,
        Title:Title,
        Author:Author,
        MSRP:MSRP,
        Genre:Genre,
        NumberofPages:NumberofPages,
        Description:Description
    };
}
var book1=createBook("Harry Potter and the Sorcerer's Stone","J.K. Rowling",10.000,"action",309,"adventures")
function displayBook(book) { 
   return book
} 
var book2=createBook("Harry Potter and the Sorcerer's Stone","J.K. Rowling",4000,"action",100,"adventures")
var arrayBooks=[]
arrayBooks.push(book1)
arrayBooks.push(book2)
console.log(arrayBooks)
function displayBooks(ArrayBooks) { 
   var result=""
     for (let i = 0; i < ArrayBooks.length; i++) {
     for(var key in ArrayBooks[i])
     {
        result=result+ArrayBooks[i][key]
     }
         result=result+"\n"
    }
   console.log(result)
} 
displayBooks(arrayBooks)
function isMatch(query,book)
{
    for (let i = 0; i < query.length; i++) {
        if(query[i].Title===book.Title)
        return true
        
    }
    return false
}
function removeBook(arrayBooks,Id)
{
    for (let i = 0; i < arrayBooks.length; i++) {
      if(arrayBooks[i].id===Id)
      {  arrayBooks.splice(i,1)
    return "the removed book number is "+i+1      
} 
    }
    return "the id not found"
} 
removeBook(arrayBooks,"Harry Potter and the Sorcerer's Stone")
function movies(Title, Director, ReleaseDate, ActorsActresses, Studio, Synopsis, Rating,Duration) {
    return {
        Title: Title,
        Director: Director,
        ReleaseDate: ReleaseDate,
        ActorsActresses: ActorsActresses,
        Studio: Studio,
        Synopsis: Synopsis,
        Rating: Rating,
        Duration: Duration
    };
}
function addTag(book,Tag,nameTag)
{
if(!book.hasOwnProperty(Tag))
book.Tag=nameTag
else 
console.log("this tag is already used")
}
function removeTag(book,Tag)
{


if(book.hasOwnProperty(Tag))
delete book.Tag
}
var movie1 = movies("Inception", "Christopher Nolan", "July 16, 2010", ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"], "Warner Bros. Pictures", "A thief enters dreams to steal secrets.", 8.8, "2h 28m");

var movie2 = movies("The Shawshank Redemption", "Frank Darabont", "September 23, 1994", ["Tim Robbins", "Morgan Freeman", "Bob Gunton"], "Columbia Pictures", "Two imprisoned men bond over years.", 9.3, "2h 22m");

var movie3 = movies("The Godfather", "Francis Ford Coppola", "March 24, 1972", ["Marlon Brando", "Al Pacino", "James Caan"], "Paramount Pictures", "Aging crime patriarch transfers control.", 9.2, "2h 55m");

var movie4 = movies("The Dark Knight", "Christopher Nolan", "July 18, 2008", ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], "Warner Bros. Pictures", "The Joker wreaks havoc in Gotham.", 9.0, "2h 32m");

var movie5 = movies("Forrest Gump", "Robert Zemeckis", "July 6, 1994", ["Tom Hanks", "Robin Wright", "Gary Sinise"], "Paramount Pictures", "Man navigates historical events.", 8.8, "2h 22m");

function displayMovie (ArrayMovies) { 
    var result=""
      for (let i = 0; i < ArrayMovies.length; i++) {
      for(var key in ArrayMovies[i])
      {
         result=result+ArrayMovies[i][key]
      }
          result=result+"\n"
     }
    console.log(result)
} 
function displayCast(object)
{
    return object.ActorsActresses
} 
displayCast(movie2)
var ArrayMovies=[]
function AddMoviesIntoArray(ArrayMovies,object)
{
    ArrayMovies.push(object)
    
}
AddMoviesIntoArray(ArrayMovies,movie1)
AddMoviesIntoArray(ArrayMovies,movie2)
AddMoviesIntoArray(ArrayMovies,movie3)
AddMoviesIntoArray(ArrayMovies,movie4)
AddMoviesIntoArray(ArrayMovies,movie5)
console.log(ArrayMovies)
function averageLength(array)
{
var sum=0
for (let i = 0; i < array.length; i++) {
   sum=sum+array[i].Duration
    
}
return sum/array.length
} 
function searchMovies(array,Title)
{
    for (let i = 0; i < array.length; i++) {
        if(array[i].Title===Title)
        {
            return "the title movie is:  "+Title
        }
        
    }
return "not found"
}
function displayItems(ArrayItems) { 
    var result=""
      for (let i = 0; i < ArrayItems.length; i++) {
      for(var key in ArrayItems[i])
      {
         result=result+ArrayItems[i][key]
      }
          result=result+"\n"
     }
    return result
 }

function searchItems( query, items,keys)
{
    for (let i = 0; i < items.length; i++) {
      if(items[i].keys===query)
      return items[i]
        
    }
} 