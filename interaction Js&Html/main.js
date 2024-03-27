function getLastElement(arr){
    return arr[arr.length-1]
}
var getparagraph=document.getElementsByTagName("p")

console.log(getparagraph[0])
console.log(getparagraph[getparagraph.length-1])

var headings=document.getElementsByTagName("h1")
console.log(headings[0])
console.log(headings[headings.length-1])
var firstHeadingElement=document.getElementById("head") 
var Body=document.body

var listItemElements =document.getElementsByTagName("p")
function changeParagraph(){
    listItemElements[0].textContent="new update done "
    }
    getLastElement(listItemElements).textContent="update other"

    var imageElements=document.getElementsByTagName("img")
    function updateEachImageSize()
    {
        for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].style.height='200px';
        imageElements[i].style.width='auto'    
        }
    }
    updateEachImageSize()
    
    function FindAll(string)
    {
        var FindAllElement=document.getElementsByTagName(string)
        return FindAllElement
    } 