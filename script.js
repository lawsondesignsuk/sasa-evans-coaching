const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    // Toggle icons
    if (navLinks.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
    } else {
        menuIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
    }
});
