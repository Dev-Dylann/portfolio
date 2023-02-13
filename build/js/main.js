const toggleNav = () => {
  const openBtn = document.querySelector(`#open-nav`);
  const closeBtn = document.querySelector(`#close-nav`);
  const nav = document.querySelector(`#mobile-nav`);
  const navLi = document.querySelectorAll(`#mobile-nav a`);

  openBtn.addEventListener(`click`, () => {
    nav.classList.toggle(`scale-y-0`);
  });

  closeBtn.addEventListener(`click`, () => {
    nav.classList.toggle(`scale-y-0`);
  });

  navLi.forEach((e) => {
    e.addEventListener(`click`, () => {
      nav.classList.toggle(`scale-y-0`);
    });
  });
};

const initApp = () => {
  toggleNav();
};

initApp();
