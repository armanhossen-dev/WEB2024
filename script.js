document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    const logo =document.getElementById('logo');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeIcon.src = 'images/sun.png';
            themeIcon.alt = 'Sun';
            logo.src = "images/logo-white.png";
        } else {
            themeIcon.src = 'images/moon.png';
            themeIcon.alt = 'Moon';
            logo.src = "images/logo.png";
        }
    });
});
