document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.container', { delay: 500 });

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation (further validation can be added)
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Here you can add code to send the form data to a server or email service
        
        alert('Message sent successfully!');
        
        // Reset form
        this.reset();
    });
});