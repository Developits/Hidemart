let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transform = `translateX(-${index * 100}%)`;
}

// Next and Previous Button Controls
document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
});

// Function to show the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Function to show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-Rotate every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

// Initialize to show the first slide
showSlide(currentSlide);
