// Initialize AOS Animation Library
AOS.init({ 
    duration: 1000, 
    once: true, 
    offset: 100 
});

// ========================================
// NAVBAR SCROLL EFFECT & MOBILE TOGGLE
// ========================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navCenter = document.querySelector('.nav-center');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navToggle && navCenter) {
    navToggle.addEventListener('click', () => {
        navCenter.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navCenter.classList.remove('active');
    });
});

// ========================================
// COUNTDOWN TIMER
// ========================================

function updateCountdown() {
    const conferenceDate = new Date('2026-04-20T09:00:00').getTime();
    const now = new Date().getTime();
    const diff = conferenceDate - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ========================================
// SCHEDULE TABS
// ========================================

const tabBtns = document.querySelectorAll('.tab-btn');
const scheduleDays = document.querySelectorAll('.schedule-day');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Hide all schedule days
        scheduleDays.forEach(day => day.style.display = 'none');

        // Show selected day
        const targetDay = document.getElementById(btn.dataset.day);
        if (targetDay) {
            targetDay.style.display = 'block';
        }
    });
});

// ========================================
// SCROLL INDICATOR
// ========================================

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({ 
            top: window.innerHeight, 
            behavior: 'smooth' 
        });
    });
}

// ========================================
// NEWSLETTER FORM SUBMISSION
// ========================================

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            alert(`Thank you for subscribing! Conference updates will be sent to ${email}`);
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================

const sections = document.querySelectorAll('section[id]');
const navMenuLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            navMenuLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// PARALLAX HERO BACKGROUND (optional)
// ========================================

window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.hero-bg-parallax');
    if (parallaxBg) {
        const scrolled = window.scrollY;
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});