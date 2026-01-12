// Smooth scroll para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        const offset = 50; // ajuste aqui (px)
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    });
});