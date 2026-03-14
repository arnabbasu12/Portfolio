// AUTO-MOVING GALLERY
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;
setInterval(() => {
    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    else scrollAmount += 2; // speed
    carousel.scrollTo({left: scrollAmount, behavior:'smooth'});
}, 50);

// ANIMATE SKILL BARS
document.querySelectorAll('.skill-bar span').forEach(bar => {
    const width = bar.dataset.width;
    bar.style.setProperty('--skill-width', width);
});

// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({behavior:'smooth'});
    });
});
