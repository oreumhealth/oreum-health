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
