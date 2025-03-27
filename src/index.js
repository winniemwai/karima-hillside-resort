const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function contactUsAlert() {
  alert("Please send us a message on our contacts page. Thank you!");
}
