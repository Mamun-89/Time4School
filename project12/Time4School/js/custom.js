// mobile Menu start
let mobileBtn = document.querySelector(".mobile-menu");
let navigation = document.querySelector(".navigation");

mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});


// mobile Menu end

const dotBtn = document.querySelectorAll(".dot-btn");
const images = document.querySelectorAll(".image");

var slierNav = function (manual) {
    dotBtn.forEach((btn) => {
        btn.classList.remove("active")
    });
    images.forEach((slide) => {
        slide.classList.remove("active")
    });
    dotBtn[manual].classList.add("active");
    images[manual].classList.add("active");
};

dotBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        slierNav(i);
    });
});

// email validation
function validation() {
    let form = document.querySelector("#form");
    let email = document.querySelector("#email").value;
    let text = document.querySelector("#text");
    let patterns = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (email.match(patterns)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email is valid.";
        text.style.color = "#65DA07";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your email is invalid.";
        text.style.color = "#DB0A03 ";
    }
}