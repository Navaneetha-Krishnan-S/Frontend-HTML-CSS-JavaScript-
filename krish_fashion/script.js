// navbar

var sideNavBar = document.querySelector(".side-navbar")
function toggle() {
    sideNavBar.style.left = "0"
}


var sideNavBar = document.querySelector(".side-navbar")
function toggleClose() {
    sideNavBar.style.left = "-70%"
}

var subscribe = document.getElementById("subscribe")
var inputSubscribe = document.getElementById("inputSubscribe")
subscribe.addEventListener("click",function(){
    if(inputSubscribe.value==""){
        alert("Enter your mail id!")}
    else{
        alert("Thank You for Subscribing our News Letter.")
    }
    inputSubscribe.value=""
})


