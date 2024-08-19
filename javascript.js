let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

document.querySelector('.prev').addEventListener('click', function() {
    showSlides(--slideIndex);
});

document.querySelector('.next').addEventListener('click', function() {
    showSlides(++slideIndex);
});

let autoSlide = setInterval(() => {
    showSlides(++slideIndex);
}, 3000);

document.querySelector('.slider').addEventListener('mouseover', () => clearInterval(autoSlide));
document.querySelector('.slider').addEventListener('mouseout', () => {
    autoSlide = setInterval(() => {
        showSlides(++slideIndex);
    }, 3000);
});