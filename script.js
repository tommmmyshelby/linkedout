// Smooth scrolling for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initialize Lucide icons
lucide.createIcons();

// Initialize Animate On Scroll
AOS.init({
  once: true,              // animate only once
  duration: 800,           // animation duration
  easing: 'ease-in-out'    // easing
});
