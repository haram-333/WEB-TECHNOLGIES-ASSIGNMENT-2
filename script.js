function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
