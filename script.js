// -------------------- Navbar toggle --------------------
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
}

// -------------------- CTA smooth scroll --------------------
const ctaBtn = document.getElementById("ctaBtn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// -------------------- Dynamic year in footer --------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// -------------------- EmailJS setup --------------------
// 1) EmailJS init – yahan apni REAL public key daalo
(function () {
  emailjs.init("0nnEyQzYCfyBHQCg_");   // example: "EVk1aB123ABCDEF"
})();

// 2) Contact form submit
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kludpjs",     // e.g. "service_xxxxxx"
        "template_ghyb2i7",          // tumhara template ID
        "#contact-form"
      )
      .then(
        function () {
          alert("Message sent successfully!");
          contactForm.reset();
        },
        function (error) {
          alert("Message could not be sent. Please try again.");
          console.error(error);
        }
      );
  });
}