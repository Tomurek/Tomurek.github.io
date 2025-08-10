// Scroll to top and reset animations
const footerArrow = document.getElementById('footerArrow');
if (footerArrow) {
    footerArrow.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Reset all section animations
        document.querySelectorAll('.section-animate').forEach(section => {
            section.classList.remove('visible');
        });
        setTimeout(() => {
            // Re-trigger animations after scroll
            animateSections();
        }, 800);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const showContentBtn = document.getElementById('showContentBtn');
    const sections = document.querySelectorAll('.section-animate');
    // Dodaj animacje dla projektów osobno
    const projectCards = document.querySelectorAll('.project-card.section-animate');
    const aboutSection = document.getElementById('about');

    showContentBtn.addEventListener('click', function (e) {
        e.preventDefault();
        slowScrollTo(aboutSection, 1200);
    });



    // Fade-in i obrót avataru
    const heroAvatar = document.querySelector('.hero-avatar');
        const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
            if(heroAvatar) heroAvatar.classList.add('visible');
            if(heroContent) heroContent.classList.add('visible');
    }, 300);

    // Animacja wysyłania formularza kontaktowego
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            contactForm.style.transition = 'box-shadow 0.5s';
            contactForm.style.boxShadow = '0 0 32px 0 #43ea7c88';
            setTimeout(() => {
                contactForm.style.boxShadow = '';
                contactForm.reset();
            }, 1200);
        });
    }
    function slowScrollTo(element, duration) {
        const offset = 60;
        const targetY = element.getBoundingClientRect().top + window.pageYOffset - offset;
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, startY + distance * easeInOutCubic(progress));
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    window.addEventListener('scroll', function () {
        animateSections();
    });

    // Animacja pojawiania się sekcji
    function animateSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.95) {
                section.classList.add('visible');
            }
        });
        // Animacja dla każdego projektu osobno
        projectCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.95) {
                card.classList.add('visible');
            }
        });
    }

    animateSections();
});


