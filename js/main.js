// *Navbar shrink effect on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;
  
  if(offset > 70)
    nav.classList.add('navbar-scrolled')
  else 
    nav.classList.remove('navbar-scrolled')
});

// *Scroll to top button
const scrollTop = document.querySelector('.scroll-top');

scrollTop.addEventListener('click', () => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});