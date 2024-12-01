function learnMore() {
    alert("Welcome to Colour Glass & Plywood! Contact us for more details.");
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
});
