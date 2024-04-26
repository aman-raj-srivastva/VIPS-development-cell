document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    if (totalSlides === 0) {
        console.error('No slides found. Check your HTML.');
        return;
    }

    function moveToNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // Cycle back to the first slide after the last
        updateCarousel();
    }

    function updateCarousel() {
        const track = document.querySelector('.carousel-track');
        const slideWidth = slides[0].clientWidth; // ensure this is returning a non-zero value
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    // Set the interval for auto-slide
    setInterval(moveToNextSlide, 3000); // Change slides every 3 seconds

    window.addEventListener('resize', updateCarousel); // Adjust carousel on window resize to ensure alignment
});
