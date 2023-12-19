document.addEventListener('DOMContentLoaded', function () {
    var mobileBtn = document.querySelector('.head__mobile-btn');
    var mobileNav = document.querySelector('.head__mobile-nav');
    var svgIcon = mobileBtn.querySelector('svg');

    var originalSVGContent = svgIcon.innerHTML;

    mobileBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('show');

        mobileBtn.classList.toggle('btn-mobile-active');

        if (svgIcon.innerHTML === originalSVGContent) {

            svgIcon.innerHTML = '<path d="M5 5L15 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 5L5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>';
        } else {
            svgIcon.innerHTML = originalSVGContent;
        }
    });
});