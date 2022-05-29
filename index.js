const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.navbar');
const navMobile = document.querySelector('.navbar-mobile');
const blackLogo = document.querySelector('#logo');
const scrolledNav = document.querySelector('.nav');
let blackMenu1 = document.querySelectorAll('.navbar-links')[0];
let blackMenu2 = document.querySelectorAll('.navbar-links')[1];
let blackMenu3 = document.querySelectorAll('.navbar-links')[2];

function mobile() {
    if (innerWidth < 850) {
        menuBtn.addEventListener('click', function(){
            navLinks.classList.toggle('mobile-menu');
            menuBtn.classList.toggle('menu-btn-no-bg');
            blackLogo.classList.toggle('blackItems');
            blackMenu1.classList.toggle('blackItems');
            blackMenu2.classList.toggle('blackItems');
            blackMenu3.classList.toggle('blackItems');
        });
        window.addEventListener('scroll', function(){
            navMobile.classList.toggle('scrollUp', window.scrollY > 100);
        })
    }
    else {
        window.addEventListener('scroll', function(){
            nav.classList.toggle('sticky', window.scrollY > 500);
            blackLogo.classList.toggle('blackItems', window.scrollY > 500);
            blackMenu1.classList.toggle('blackItems', window.scrollY > 500);
            blackMenu2.classList.toggle('blackItems', window.scrollY > 500);
            blackMenu3.classList.toggle('blackItems', window.scrollY > 500);
        });
    }
}

mobile();
