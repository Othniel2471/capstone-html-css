const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-content');

const toggle = () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
};
const closeMenu = () => {
  menuToggle.classList.remove('active');
  mobileMenu.classList.remove('active');
};

menuToggle.addEventListener('click', toggle);
navLinks.forEach((btn) => {
  btn.addEventListener('click', closeMenu);
});