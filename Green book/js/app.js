const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-open");
  const social = document.querySelector(".soical");
  menu.addEventListener("click", () => {
    nav.classList.toggle ('show-nav')
  });

}

navSlide();