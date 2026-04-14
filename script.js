function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Optional: Navbar shadow on scroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("shadow-lg", window.scrollY > 10);
});