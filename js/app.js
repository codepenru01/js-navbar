let humburger = document.querySelector(".humburger");
let navMenu = document.querySelector(".navbar");

humburger.addEventListener("click", function() {
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})