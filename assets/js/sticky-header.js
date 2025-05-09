let lastScroll = 0;
const header = document.getElementById('header');
const scrollThreshold = 50; // Minimum scroll before hiding

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('header-hidden');
        return;
    }

    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        // Scrolling down & past threshold
        header.classList.add('header-hidden');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
    }

    lastScroll = currentScroll;
});