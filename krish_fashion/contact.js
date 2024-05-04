// navbar

var sideNavBar = document.querySelector(".side-navbar")
function toggle() {
    sideNavBar.style.left = "0"
}


var sideNavBar = document.querySelector(".side-navbar")
function toggleClose() {
    sideNavBar.style.left = "-70%"
}




// contact alert

var submit = document.getElementById("submit")


submit.addEventListener("click", function (event) {
    var name = document.getElementById("name")
    var mail = document.getElementById("mail")
    var message = document.getElementById("message")
    event.preventDefault()


    if (
        name.value == "" ||
        mail.value == "" ||
        message.value == "") {
        alert("Please fill all fields!")

    }
    else {
        alert("Thank You for Contacting us! We will reply you soon.")
    }

    name.value = ""
    mail.value = ""
    message.value = ""


})




