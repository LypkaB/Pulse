window.addEventListener('DOMContentLoaded', () => {
    const adaptiveMenu = document.querySelector('.header__menu-btn'),
          menu = document.querySelector('.header__inner');

    adaptiveMenu.addEventListener('click', () => {
        adaptiveMenu.classList.toggle('header__menu-btn_active');
        menu.classList.toggle('header__inner_active');
    })
})