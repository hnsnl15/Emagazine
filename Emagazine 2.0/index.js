const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.navbar');
const blackLogo = document.querySelector('#logo');
let blackMenu1 = document.querySelectorAll('.navbar-links')[0];
let blackMenu2 = document.querySelectorAll('.navbar-links')[1];
let blackMenu3 = document.querySelectorAll('.navbar-links')[2];

menuBtn.addEventListener('click', function(){
    navLinks.classList.toggle('mobile-menu');
    menuBtn.classList.toggle('menu-btn-no-bg');
    blackLogo.classList.toggle('blackItems');
    blackMenu1.classList.toggle('blackItems');
    blackMenu2.classList.toggle('blackItems');
    blackMenu3.classList.toggle('blackItems');
});

window.addEventListener('scroll', function() {
    navLinks.classList.toggle('scrollUp', window.scrollY > 100);
})