// cSpell: disable
import { renderCertifications } from './certifications.js';

// Initial render of certifications
document.addEventListener('DOMContentLoaded', renderCertifications);

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
  if (!splashScreen) return;

  splashScreen.style.transition = 'opacity 0.5s';
  splashScreen.style.opacity = '0';
  setTimeout(() => {
    splashScreen.remove();
    document.querySelector('header').classList.remove('hidden');
    document.querySelector('main').classList.remove('hidden');
    document.querySelector('footer').classList.remove('hidden');
  }, 500);
});
