// navbar

var sideNavBar = document.querySelector(".side-navbar")
function toggle() {
    sideNavBar.style.left = "0"
}


var sideNavBar = document.querySelector(".side-navbar")
function toggleClose() {
    sideNavBar.style.left = "-70%"
}




// search

var container = document.getElementById("collection")
var search = document.getElementById("search")
var productlist = container.querySelectorAll("div")

search.addEventListener("keyup", function () {

    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var name = productlist[count].querySelector("p").textContent
        if (name.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})

