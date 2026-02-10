// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    hamburger.classList.toggle('active');
    
    if (menuOpen) {
        navMenu.classList.add('active');
        navMenu.style.display = 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '60px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.flexDirection = 'column';
        navMenu.style.background = 'white';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        navMenu.style.gap = '0';
        navMenu.style.zIndex = '999';
    } else {
        navMenu.classList.remove('active');
        navMenu.style.display = 'none';
    }
});

// Keep menu open - removed auto-close functionality
// Users can now navigate without menu disappearing

// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]:first-of-type').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const company = this.querySelector('input[type="text"]:last-of-type').value.trim();
        const message = this.querySelector('textarea').value.trim();
        
        // Simple validation
        if (!name) {
            alert('Nama harus diisi');
            return;
        }
        if (!email || !isValidEmail(email)) {
            alert('Email tidak valid');
            return;
        }
        if (!message) {
            alert('Pesan harus diisi');
            return;
        }
        
        // Show success message
        alert('Terima kasih! Pesan Anda telah dikirim. Tim kami akan menghubungi Anda segera.');
        
        // Reset form
        this.reset();
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value.trim();
        
        if (email && isValidEmail(email)) {
            alert('Terima kasih! Anda telah berhasil berlangganan newsletter kami.');
            this.reset();
        } else {
            alert('Email tidak valid');
        }
    });
    
    // Make newsletter form submittable with button
    const button = newsletterForm.querySelector('.btn');
    button.type = 'submit';
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and testimonials
document.querySelectorAll('.service-card, .feature-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Counter animation for stats
const statItems = document.querySelectorAll('.stat-item h3');
const statsSection = document.querySelector('.stats');
let hasAnimated = false;

window.addEventListener('scroll', () => {
    if (!hasAnimated && statsSection && isElementInViewport(statsSection)) {
        hasAnimated = true;
        animateCounters();
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function animateCounters() {
    statItems.forEach(item => {
        const text = item.textContent;
        const isNumber = text.match(/\d+/);
        
        if (isNumber) {
            const number = parseInt(isNumber[0]);
            let current = 0;
            const increment = Math.ceil(number / 50);
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(counter);
                }
                
                if (text.includes('+')) {
                    item.textContent = current + '+';
                } else if (text.includes('/')) {
                    item.textContent = current + '/7';
                } else {
                    item.textContent = current;
                }
            }, 30);
        }
    });
}

// CTA Button functionality
const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
ctaButtons[0].addEventListener('click', () => {
    alert('Terima kasih! Tim InnovaTech akan membantu Anda. Silakan isi form kontak di bawah untuk memulai.');
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

ctaButtons[1].addEventListener('click', () => {
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

// Add active state to navigation links
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--dark-text)';
        }
    });
});

// Mobile responsive - Show/hide menu on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
        navMenu.style.position = 'relative';
        navMenu.style.top = 'auto';
        navMenu.style.left = 'auto';
    } else {
        navMenu.style.display = 'none';
    }
});

// Initialize tooltips on hover
document.querySelectorAll('.service-card, .feature-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

console.log('InnovaTech landing page loaded successfully!');
