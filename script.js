// Welcome message
window.onload = function () {
    console.log("Welcome to Hemlata Uday Fashion Design!");
};

// Buy Now button
function buyNow() {
    alert("Thank you for your interest! Please contact Hemlata Uday Fashion Design to place your order.");
}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();
    });
}

// Highlight active navigation link
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});
