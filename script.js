function toggleMenu() {
  const nav = document.getElementById('navItems');
  nav.classList.toggle('show');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const nav = document.getElementById('navItems');
    nav.classList.remove('show')
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight : 0;
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});
