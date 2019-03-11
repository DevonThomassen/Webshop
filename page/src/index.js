var nav = document.querySelectorAll(".nav")[0];
var element = document.getElementsByTagName("body")[0];

var expand = true;

nav.addEventListener("click", function(e) {
    e.preventDefault;
    if (expand) {

        element.className += " expand";
        element.style.overflow = "hidden";

        expand = false;

    } else {

        element.classList.remove("expand");
        element.style.overflow = "visible";

        expand = true;
    }
})

var cart = document.querySelectorAll(".cart")[0];

var expand2 = true;

cart.addEventListener("click", function(e) {
    e.preventDefault;
    if (expand2) {

        element.className += " cart_expand";
        element.style.overflow = "hidden";

        expand2 = false;

    } else {

        element.classList.remove("cart_expand");
        element.style.overflow = "visible";

        expand2 = true;
    }
})

var closingCart = document.querySelectorAll(".cart")[1];

closingCart.addEventListener("click", function(e) {
    e.preventDefault;
    if (expand2) {

        element.className += " cart_expand";
        element.style.overflow = "hidden";

        expand2 = false;

    } else {

        element.classList.remove("cart_expand");
        element.style.overflow = "visible";

        expand2 = true;
    }
})