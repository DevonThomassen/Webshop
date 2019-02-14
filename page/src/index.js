var nav = document.querySelectorAll(".nav")[0];
var element = document.getElementsByTagName("body")[0];

var expand = true;

nav.addEventListener("click", function(e) {
    e.preventDefault;
    if (expand) {

        element.className += " expand";

        expand = false;

    } else {

        element.className = "";

        expand = true;
    }
})