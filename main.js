//menu hamburguer

const hamburguerMenu = document.querySelector('.header__hamburguer');
const modalNavbar = document.querySelector('.modal-navbar');

hamburguerMenu.addEventListener('click', () => {
  modalNavbar.classList.toggle('hidden');
});
