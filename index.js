const header = document.querySelector(".header");
const menuLinks = document.querySelector(".header__links");
const headerButton = document.querySelector(".header__button");
const headerButtonClosed = document.querySelector(".header__button_closed");
const akadev = document.querySelector(".akadev__title");
const buttonClosed = document.querySelector(".header__button_close");

headerButton.addEventListener("click", () => {
  menuLinks.classList.add("header__links_opened");
  headerButton.classList.add("header__button_closed");
  akadev.classList.add("akadev_closed");
  header.classList.add("header__opened");
});

buttonClosed.addEventListener("click", () => {
  menuLinks.classList.remove("header__links_opened");
  headerButton.classList.remove("header__button_closed");
  akadev.classList.remove("akadev_closed");
  header.classList.remove("header__opened");
});

let div = document.querySelectorAll(".count");

animate({ elem: div[0], to: 10, sec: 5 });
animate({ elem: div[1], to: 30, sec: 5 });
animate({ elem: div[2], to: 130, sec: 5 });

function animate({ elem, from = 0, to, sec }) {
  let tick = (to - from) / (60 * sec);

  loop();
  function loop() {
    elem.textContent = Math.round((from += tick));

    if (from >= to) {
      elem.textContent = to;
      return;
    }

    requestAnimationFrame(loop);
  }
}

new Swiper(".development__swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".development-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  // Navigation arrows
  // And if we need scrollbar
});

new Swiper(".cases__swiper", {

  navigation: {
    nextEl: '.cases-button-next',
    prevEl: '.cases-button-prev',
  },

  pagination: {
    el: ".cases-pagination",
    type: 'fraction',
  },
});
