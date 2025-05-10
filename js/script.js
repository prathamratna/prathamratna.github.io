// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenuButton.classList.toggle('active');
    mobileMenu.classList.toggle('open', isOpen);
    mobileMenuButton.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    
    // Animate menu items when opening
    if (isOpen) {
        const menuItems = document.querySelectorAll('.mobile-menu a');
        menuItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    }
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenuButton.classList.remove('active');
    mobileMenu.classList.remove('open');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuButton.classList.remove('active');
        mobileMenu.classList.remove('open');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    observer.observe(element);
});
// Proof gallery functionality
const proofThumbnails = document.querySelectorAll('.proof-thumbnail img');
const proofModal = document.querySelector('.proof-modal');
const proofModalImg = proofModal.querySelector('img');
const proofModalClose = document.querySelector('.proof-modal-close');

proofThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        proofModalImg.src = thumbnail.getAttribute('data-full');
        proofModalImg.alt = thumbnail.alt;
        proofModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});

proofModalClose.addEventListener('click', () => {
    proofModal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
});

proofModal.addEventListener('click', (e) => {
    if (e.target === proofModal) {
        proofModal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && proofModal.classList.contains('active')) {
        proofModal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
});
// Proof of Work Gallery Functionality
const proofModal = document.getElementById('proofModal');
const modalImage = document.getElementById('modalImage');
const proofThumbnails = document.querySelectorAll('.proof-thumbnail img');
const proofModalClose = document.querySelector('.proof-modal-close');

proofThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        modalImage.src = thumbnail.getAttribute('data-full');
        modalImage.alt = thumbnail.alt;
        proofModal.classList.add('active');
        proofModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
});

proofModalClose.addEventListener('click', () => {
    proofModal.classList.remove('active');
    proofModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
});

proofModal.addEventListener('click', (e) => {
    if (e.target === proofModal) {
        proofModal.classList.remove('active');
        proofModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && proofModal.classList.contains('active')) {
        proofModal.classList.remove('active');
        proofModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenuButton.classList.remove('active');
        mobileMenu.classList.remove('open');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }
    if (proofModal.classList.contains('active')) {
        modalImage.style.maxHeight = `${window.innerHeight * 0.85}px`;
    }
});
