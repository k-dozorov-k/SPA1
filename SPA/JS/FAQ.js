
const buttons = document.querySelectorAll('.main__faq-list-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const listItem = button.closest('li');
        const answer = listItem.querySelector('.main__faq-p');


        document.querySelectorAll('.main__faq-p').forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.style.display = 'none';
            }
        });


        answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';

        button.classList.toggle('btn-active');
        const arrow = button.querySelector('.main__faq-arrow');
        arrow.classList.toggle('arrow-active');

        document.querySelectorAll('.main__faq-list-btn').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('btn-active');
            }
        });

        document.querySelectorAll('.main__faq-arrow').forEach(otherArrow => {
            if (otherArrow !== arrow) {
                otherArrow.classList.remove('arrow-active');
            }
        });


    });
});