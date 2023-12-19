let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.getElementById('slider').style.transform = `translateX(${offset}%)`;
    updateIndicators();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function updateIndicators() {
    const indicatorsContainer = document.getElementById('indicators');
    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => showSlide(i));
        if (i === currentSlide) {
            indicator.style.backgroundColor = '#FF0093';
        }
        indicatorsContainer.appendChild(indicator);
    }
}

setInterval(nextSlide, 4000);
updateIndicators();