let lastScrollY = window.scrollY;
const header = document.querySelector("nav"); // Change 'navS' to 'nav'

// Handle header visibility based on scroll direction
window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add("hidden-nav");
    } else {
        header.classList.remove("hidden-nav");
    }
    lastScrollY = window.scrollY;
});
