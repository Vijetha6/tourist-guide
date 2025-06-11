function setTheme(isDark) {
    localStorage.setItem('darkMode', isDark);
    document.body.classList.toggle('dark-mode', isDark);
}

function loadTheme() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setTheme(isDark);
}

function toggleDarkMode() {
    const isDark = document.body.classList.contains('dark-mode');
    setTheme(!isDark);
}

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    // Initial state
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', loadTheme);
