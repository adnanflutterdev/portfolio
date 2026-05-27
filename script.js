const menuBtn = document.getElementById("menuBtn");
const navContainer = document.getElementById("navLinks");

const revealElements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

//    MOBILE NAVIGATION

function toggleMobileMenu() {
    navContainer.classList.toggle("active");
}

function closeMobileMenu() {
    navContainer.classList.remove("active");
}

menuBtn.addEventListener("click", toggleMobileMenu);

navItems.forEach((item) => {
    item.addEventListener("click", closeMobileMenu);
});

//    SCROLL REVEAL ANIMATION

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

//    ACTIVE NAV LINK

function updateActiveNavLink() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");

        if (item.getAttribute("href").includes(currentSection)) {
            item.classList.add("active");
        }
    });
}

//    SCROLL EVENTS

function handleScroll() {
    revealOnScroll();
    updateActiveNavLink();
}

window.addEventListener("scroll", () => {
    requestAnimationFrame(handleScroll);
});

//    INITIAL LOAD

handleScroll();