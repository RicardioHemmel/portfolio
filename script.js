let navbar = document.querySelector('#navbar');

window.addEventListener("scroll", function () {
    if (window.innerWidth > 991) {
        navbar.classList.toggle('nav-bar-background-effect', window.scrollY > 700);
        navbar.classList.toggle('nav-bar-transition-effect', window.scrollY > 700);
    } else {
        navbar.classList.toggle('nav-bar-transition-effect', window.scrollY > 700);
    }
});


    let navbarToggle = document.querySelector('.navbar-toggler');
    navbarToggle.addEventListener('click', function () {
        navbar.classList.toggle('toggle-nav-bar-background');
    });
