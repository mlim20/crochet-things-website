// document.addEventListener("DOMContentLoaded", showSlideshow(0));
let currentIdx = 0;
showSlideshow(currentIdx);

function nextSlide() {
    currentIdx++;
    showSlideshow(currentIdx);
}

function prevSlide() {
    currentIdx--;
    showSlideshow(currentIdx);
}

function jumpSlide(idx) {
    showSlideshow(idx);
}

function showSlideshow(current) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // set currentIdx to appropriate index
    if (current > slides.length - 1) {
        current = 0;
    }
    if (current < 0) {
        current = slides.length - 1;
    }
    currentIdx = current;

    // make all slides invisible
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // remove "active" from dot class
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // show correct slide and set dot to active
    slides[currentIdx].style.display = "block";
    dots[currentIdx].className += " active";
}