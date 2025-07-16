// Form submission alert handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form[action="/submit-contact"]');
    const appointmentForm = document.querySelector('form[action="/submit-appointment"]');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for reaching out. We will get back to you soon!');
    });

    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your appointment has been booked!');
    });
});

// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
