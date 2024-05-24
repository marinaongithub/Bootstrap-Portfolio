document.querySelectorAll('.navbar-nav .nav-link').forEach( (link) => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar-collapse .collapse .show').classList.remove('show');
    });
});