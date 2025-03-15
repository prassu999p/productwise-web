// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                
                // Scroll to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const subject = this.querySelector('#subject').value;
            const message = this.querySelector('#message').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! We'll get back to you soon at ${email}.`);
            
            // Reset the form
            this.reset();
        });
    }

    // Add animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        featureCards.forEach(card => {
            observer.observe(card);
        });
    }

    // Simple testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial');
        let currentIndex = 0;

        // Auto-scroll testimonials every 5 seconds on larger screens
        if (window.innerWidth > 768) {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                testimonialSlider.scrollTo({
                    left: testimonials[currentIndex].offsetLeft - testimonialSlider.offsetLeft,
                    behavior: 'smooth'
                });
            }, 5000);
        }
    }
});
