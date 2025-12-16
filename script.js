// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Skill Progress Animation
const animateSkills = () => {
    const skillBars = document.querySelectorAll('.progress-fill');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barTop < windowHeight - 100) {
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 200);
        }
    });
};

// Typing Effect for Hero Title
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Parallax Effect for Background
let lastScrollY = window.scrollY;

const parallaxEffect = () => {
    const scrollY = window.scrollY;
    const stars = document.querySelector('.stars');
    const twinkling = document.querySelector('.twinkling');
    
    if (stars) stars.style.transform = `translateY(${scrollY * 0.5}px)`;
    if (twinkling) twinkling.style.transform = `translateY(${scrollY * 0.3}px)`;
    
    lastScrollY = scrollY;
};

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

const navbarScroll = () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
};

// Project Card Tilt Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});

// Button Click Animation
const buttons = document.querySelectorAll('.btn-view');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Social Icon Pulse Animation
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach((icon, index) => {
    setTimeout(() => {
        icon.style.animation = `pulse 2s ease-in-out infinite`;
        icon.style.animationDelay = `${index * 0.2}s`;
    }, 1000);
});

// Cursor Trail Effect (Optional - Fun Addition)
const createCursorTrail = () => {
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 1000);
    });
};

// Add cursor trail styles dynamically
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: absolute;
        width: 5px;
        height: 5px;
        background: radial-gradient(circle, rgba(102, 126, 234, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        animation: trailFade 1s ease-out forwards;
        z-index: 9999;
    }
    
    @keyframes trailFade {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Counter Animation for Stats (if you want to add stats)
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.ceil(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    observer.observe(element);
});

// Event Listeners
window.addEventListener('scroll', () => {
    revealOnScroll();
    animateSkills();
    parallaxEffect();
    navbarScroll();
});

// Initial calls
revealOnScroll();
navbarScroll();

// Optional: Uncomment to enable cursor trail
// createCursorTrail();

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth page transitions
document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        setTimeout(() => {
            hero.style.transition = 'opacity 1s ease';
            hero.style.opacity = '1';
        }, 200);
    }
});

console.log('🎨 Portfolio loaded successfully!');
console.log('✨ Designed with love by Shreya Patil');