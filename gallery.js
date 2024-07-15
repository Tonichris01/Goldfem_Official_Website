document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementsByClassName('hamburger-menu')[0];
  const navLinks = document.getElementsByClassName('nav-links')[0];
  const navbar = document.getElementsByClassName('navbar')[0];

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
});

// make the img full screen on click
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}