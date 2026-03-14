// AUTO-MOVING CAROUSEL
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;
setInterval(() => {
    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    else scrollAmount += 2; // speed
    carousel.scrollTo({left: scrollAmount, behavior: 'smooth'});
}, 50);

// ANIMATE SKILL BARS
document.querySelectorAll('.skill-bar span').forEach((bar) => {
    const width = bar.style.width || '80%';
    bar.style.setProperty('--skill-width', width);
});

// OPTIONAL: HIGHLIGHT TABLE ROW ON HOVER
document.querySelectorAll('.academics-section tr').forEach(row => {
    row.addEventListener('mouseenter', () => {row.style.backgroundColor = '#e0f7fa';});
    row.addEventListener('mouseleave', () => {row.style.backgroundColor = '';});
});
