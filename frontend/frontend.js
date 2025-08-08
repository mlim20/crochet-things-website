window.addEventListener("scroll", activeScroll);

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

// adapted from CodzSword (https://www.youtube.com/watch?v=lLPoX0nUmyc)
function activeScroll() {
    const currentScroll = window.scrollY;
    const sections = document.querySelectorAll("section[id].content");
    // const navHeight = document.getElementById("navbar").offsetHeight;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 90;
        const id = section.getAttribute("id");
        const currentNav = document.querySelector(`#navbar a[href*="#${id}"]`);

        if (currentScroll > sectionTop && currentScroll <= sectionTop + sectionHeight) {
            currentNav.classList.add("active");
        } else {
            currentNav.classList.remove("active");
        }
    })
}