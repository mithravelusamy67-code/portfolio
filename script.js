script.js


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});


document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});


document.getElementById("current-year").textContent =
    new Date().getFullYear();


const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                navigationLinks.forEach(function (link) {
                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        rootMargin: "-25% 0px -60% 0px"
    }
);

sections.forEach(function (section) {
    sectionObserver.observe(section);
});
