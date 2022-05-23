var menuBtn = document.querySelector('.menu-btn');
var navLinks = document.querySelector('.nav-links');
var logo = document.querySelector('.logo');
var logoo = document.querySelector('a');
var nav = document.querySelector('.navbar');
var blackLinks = document.querySelectorAll(".links");
var link1 = document.querySelectorAll('a')[0];
var link2 = document.querySelectorAll('a')[1];
var link3 = document.querySelectorAll('a')[2];

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('mobile-menu');
    logo.classList.toggle('logo2')
})

window.addEventListener('scroll', function() {
    nav.classList.toggle('sticky', window.scrollY > 0);
    logo.classList.toggle('logo2', window.scrollY > 0);
    logoo.classList.toggle('blackk', window.scrollY > 0);
    blackLinks[0].classList.toggle('blackk', window.scrollY > 0);
    blackLinks[1].classList.toggle('blackk', window.scrollY > 0);
    blackLinks[2].classList.toggle('blackk', window.scrollY > 0);
    blackLinks[3].classList.toggle('blackk', window.scrollY > 0);

})