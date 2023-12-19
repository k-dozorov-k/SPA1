document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector('.main__service-cards');
    const cardWidth = 392;
    const maxPosition = 1360;
    let currentPosition = 0;

    // Обработчик для кнопки влево
    document.querySelector('.main__service-btn-arrowr').addEventListener('click', function () {
        if (currentPosition < 0) {
            slideCards('left');
        }
    });

    // Обработчик для кнопки вправо
    document.querySelector('.main__service-btn-arrowl').addEventListener('click', function () {
        if (currentPosition > -maxPosition) {
            slideCards('right');
        }


    });


    function slideCards(direction) {
        currentPosition += direction === 'left' ? cardWidth : -cardWidth;
        cardContainer.style.transform = `translateX(${currentPosition}px)`;
    }
});