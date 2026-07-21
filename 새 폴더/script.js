const items = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

items.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 0.035, 0.25)}s`;
  io.observe(item);
});


const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.nav');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const opened = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(opened));
    menuToggle.textContent = opened ? '×' : '☰';
  });
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}
