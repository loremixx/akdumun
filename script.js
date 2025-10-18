const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    console.log('Kayıt Formu Verileri:', data);
    

    
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    console.log('İletişim Formu Verileri:', data);
    

    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const heroBackground = document.querySelector('.hero-background');
    
    for (let i = 0; i < 10; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        const size = Math.random() * 80 + 40;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const rotation = Math.random() * 360;
        
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size * 0.7}px`;
        leaf.style.top = `${top}%`;
        leaf.style.left = `${left}%`;
        leaf.style.transform = `rotate(${rotation}deg)`;
        leaf.style.opacity = Math.random() * 0.3 + 0.1;
        
        heroBackground.appendChild(leaf);
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.committee-card, .timeline-item, .nature-card').forEach(el => {
    observer.observe(el);
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});


window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('İşleminiz başarıyla alındı!', 'success');
        this.reset();
    });
});


const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.committee-card, .timeline-item, .sponsor-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(el);
});

function updateCountdown() {
    const conferenceDate = new Date('2025-03-15');
    const now = new Date();
    const diff = conferenceDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `${days}gün ${hours}saat`;
    }
}

updateCountdown();
setInterval(updateCountdown, 3600000);
