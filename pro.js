const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

// Open and close the mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
});

// Close the menu after clicking a navigation link
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

        menuToggle.textContent = "☰";
    });
});

// Automatically display the current year
document.querySelector("#year").textContent =
    new Date().getFullYear();