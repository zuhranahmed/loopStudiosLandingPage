const openMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileNav = document.querySelector(".navbar-mobile");

openMenu.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
});

closeMenu.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
});
