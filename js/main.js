// cSpell: disable
import { renderCertifications, certifications } from './certifications.js';

const loadMoreButton = document.getElementById('load-more');
let visibleCount = 6;

// Initial render
renderCertifications(visibleCount);

// Event listener for Load More button
loadMoreButton.addEventListener('click', () => {
  visibleCount = certifications.length;
  renderCertifications(visibleCount);
  loadMoreButton.style.display = 'none';
});

// Event listener for drawer toggle
document.getElementById('drawer-toggle').addEventListener('click', () => {
  const drawer = document.getElementById('drawer');
  drawer.classList.toggle('open');
});

// Event listener for backdrop
document.getElementById('backdrop').addEventListener('click', () => {
  const drawer = document.getElementById('drawer');
  drawer.classList.remove('open');
});

// Event listener for drawer close after clicking on link
document.getElementById('drawer-close').addEventListener('click', (e) => {
  if (e.target.tagName !== 'A') return;
  const drawer = document.getElementById('drawer');
  drawer.classList.remove('open');
});

// Hide splash screen after all content is loaded
window.addEventListener('load', () => {
  const splashScreen = document.getElementById('splash-screen');
  setTimeout(() => {
    splashScreen.style.display = 'none';
    window.scrollTo(0, 0);
    document.body.classList.remove('no-scroll');
  }, 2000);
});
