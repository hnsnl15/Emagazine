const blogNav = document.querySelector('.blog-nav-text');

if (innerWidth > 850) {
window.addEventListener('scroll', function(){
    blogNav.classList.toggle('sticky-dark', window.scrollY > 0);
    blogNav.classList.toggle('blog-nav-text-white', window.scrollY > 0);
    blogNav.classList.toggle('blog-nav-text2', window.scrollY > 0)
})
}