document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll('.main__serviceinfo-list li');
    const cards = document.querySelectorAll('.main__serviceinfo-card');
    let currentCardIndex = 0; // Индекс текущей активной карточки

    // Добавление обработчиков событий для элементов списка
    listItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            showCard(index);
        });
    });

    // Функция для отображения карточки по индексу
    function showCard(index) {
        // Скрытие всех карточек
        cards.forEach(card => card.classList.remove('active'));
        // Убираем выделение со всех элементов списка
        listItems.forEach(item => item.classList.remove('li-active'));

        // Отображение выбранной карточки
        cards[index].classList.add('active');
        // Выделяем элемент списка только для выбранной карточки
        listItems[index].classList.add('li-active');

        // Обновляем текущий индекс активной карточки
        currentCardIndex = index;
    }
});