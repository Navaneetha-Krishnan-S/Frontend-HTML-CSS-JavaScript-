// adding book 

var addButton  = document.querySelector(".add-button");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");

addButton.addEventListener("click",function(){
    overlay.style.display="block";
    popup.style.display="block";
})


//cancel button in popup

var cancelBook = document.getElementById("cancel-book")

cancelBook.addEventListener("click", function(event){

    event.preventDefault()
    overlay.style.display="none";
    popup.style.display="none";

})

// add book 

var addBook = document.getElementById("add-book")
var container = document.querySelector(".main-container")
var titleInput = document.getElementById("title-input")
var authorInput = document.getElementById("author-title")
var description = document.getElementById("description")

addBook.addEventListener("click",function(event){

    event.preventDefault()

    var div = document.createElement("div")
    div.setAttribute("class", "container")
    div.innerHTML=`<h2>${titleInput.value}</h2>
    <h4> ${authorInput.value}</h4>
    <p>${description.value}</p>
    <button onclick="deleteBook(event)" >Delete</button>`
    titleInput.value=""
    authorInput.value=""
    description.value=""


    
    overlay.style.display="none";
    popup.style.display="none";
    container.append(div)
})

//delete book



function deleteBook(event){
    event.target.parentElement.remove();
}