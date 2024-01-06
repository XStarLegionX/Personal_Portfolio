let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slides[slideIndex - 1].style.opacity = "1";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.getElementById("arrow-left").onclick = function () {
    plusSlides(-1);
}

document.getElementById("arrow-right").onclick = function () {
    plusSlides(1);
}