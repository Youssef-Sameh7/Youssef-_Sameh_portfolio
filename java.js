document.addEventListener("DOMContentLoaded", () => {

/* ===============================
   Footer Year
=============================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ===============================
   Mobile Navigation
=============================== */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        navigation.classList.toggle("active");
    });


    // Close menu after clicking a navigation link

    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });

    });

}


/* ===============================
   Contact Form Validation
=============================== */

const form = document.getElementById("contactForm");

if (!form) {
    return;
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const formStatus = document.getElementById("formStatus");


/* Email validation */

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


/* Clear errors */

const clearErrors = () => {

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    nameInput.closest(".field").classList.remove("invalid");
    emailInput.closest(".field").classList.remove("invalid");
    messageInput.closest(".field").classList.remove("invalid");

    formStatus.textContent = "";
    formStatus.className = "form-status";
};


/* Submit */

form.addEventListener("submit", (event) => {

    event.preventDefault();

    clearErrors();

    let valid = true;


    // Name

    const name = nameInput.value.trim();

    if (!name) {

        nameError.textContent = "Please enter your name.";
        nameInput.closest(".field").classList.add("invalid");

        valid = false;
    }


    // Email

    const email = emailInput.value.trim();

    if (!email) {

        emailError.textContent = "Please enter your email.";
        emailInput.closest(".field").classList.add("invalid");

        valid = false;

    } else if (!isValidEmail(email)) {

        emailError.textContent = "Please enter a valid email.";
        emailInput.closest(".field").classList.add("invalid");

        valid = false;
    }


    // Message

    const message = messageInput.value.trim();

    if (!message) {

        messageError.textContent = "Please enter a message.";
        messageInput.closest(".field").classList.add("invalid");

        valid = false;
    }


    // Result

    if (!valid) {

        formStatus.textContent =
            "Please fix the highlighted fields.";

        formStatus.classList.add("error-status");

        return;
    }


    /*
        IMPORTANT:
        This is only frontend validation.

        To actually send the message, connect this form
        to Formspree, EmailJS, Netlify Forms, or your own backend.
    */

    formStatus.textContent =
        "Message validated successfully. Connect a form service to send it.";

    formStatus.classList.add("success");

    form.reset();

});


/* ===============================
   Scroll Reveal
=============================== */

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observerInstance.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });

}

});