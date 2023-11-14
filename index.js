const header = document.querySelector('.header');
const menuLinks = document.querySelector('.header__links');
const headerButton = document.querySelector('.header__button');
const headerButtonClosed = document.querySelector('.header__button_closed')
const akadev = document.querySelector('.akadev');
const buttonClosed = document.querySelector('.header__button_close');


headerButton.addEventListener("click", () => {
    menuLinks.classList.add("header__links_opened");
    headerButton.classList.add('header__button_closed');
    akadev.classList.add('akadev_closed');
    header.classList.add('header__opened')
  });

  buttonClosed.addEventListener("click", () => {
    menuLinks.classList.remove("header__links_opened");
    headerButton.classList.remove('header__button_closed');
    akadev.classList.remove('akadev_closed');
    header.classList.remove('header__opened')
  });