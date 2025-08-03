
document.addEventListener('DOMContentLoaded', function() {
const eventDate = new Date('2025-11-05T09:00:00').getTime();
function updateCountdown() {
const now = new Date().getTime();
const distance = eventDate - now;
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById('days').textContent = days.toString().padStart(2, '0');
document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -20px 0px'
};
const observer = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.animationPlayState = 'running';
if (entry.target.classList.contains('theme-card')) {
entry.target.classList.add('animate-theme-card');
}
}
});
}, observerOptions);
document.querySelectorAll('.fade-in, .theme-card').forEach(el => {
el.style.animationPlayState = 'paused';
observer.observe(el);
});
const themeCards = document.querySelectorAll('.theme-card');
themeCards.forEach(card => {
  const icon = card.querySelector('.icono-tema');
  card.addEventListener('mouseenter', () => {
    if (icon) icon.classList.add('animate-bounce');
  });
  card.addEventListener('mouseleave', () => {
    if (icon) icon.classList.remove('animate-bounce');
  });
});

const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
if (window.scrollY > 500) {
backToTopButton.style.transform = 'translateY(0)';
backToTopButton.style.opacity = '1';
} else {
backToTopButton.style.transform = 'translateY(20px)';
backToTopButton.style.opacity = '0';
}
});
backToTopButton.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
});


document.addEventListener('DOMContentLoaded', function() {
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
const label = input.nextElementSibling;
input.addEventListener('focus', function() {
if (label) {
label.style.transform = 'translateY(-1.5rem) scale(0.875)';
label.style.color = '#5925DC';
}
});
input.addEventListener('blur', function() {
if (label && !input.value) {
label.style.transform = 'translateY(0) scale(1)';
label.style.color = '#6B7280';
}
});
if (input.value) {
if (label) {
label.style.transform = 'translateY(-1.5rem) scale(0.875)';
}
}
});
});
