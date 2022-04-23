document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
});

function eventListeners() {
    const mobileMenu = document.querySelector('.header__menu-icon');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {

    const navegacion = document.getElementById('naveg');

    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
}

