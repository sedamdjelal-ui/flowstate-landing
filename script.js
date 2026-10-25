const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const ctaForm = document.getElementById('ctaForm');
ctaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = ctaForm.querySelector('button');
  const original = btn.textContent;
  btn.textContent = 'تم التسجيل ✓';
  ctaForm.reset();
  setTimeout(() => { btn.textContent = original; }, 2500);
});
