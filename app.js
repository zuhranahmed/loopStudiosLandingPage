const openMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileNav = document.querySelector(".navbar-mobile");
const body = document.querySelector("body");

openMenu.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
  body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
  body.style.overflow = "auto";
});
