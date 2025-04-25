import { createHeader } from './components/header.js';
import { createHero } from './components/hero.js';
import { createProjects } from './components/projects.js';
import { createSkills } from './components/skills.js';
import { createWorks } from './components/works.js';
import { createContact } from './components/contact.js';
import { createFooter } from './components/footer.js';
import { initAnimations } from './animations.js';
import { initFormHandling } from './form.js';

// Initialize the app
function initApp() {
  const appContainer = document.getElementById('app');
  
  // Create a document fragment for better performance
  const fragment = document.createDocumentFragment();
  const tempContainer = document.createElement('div');
  
  // Build the HTML string
  tempContainer.innerHTML = `
    ${createHeader()}
    ${createHero()}
    ${createProjects()}
    ${createSkills()}
    ${createWorks()}
    ${createContact()}
    ${createFooter()}
  `;
  
  // Move nodes to fragment
  while (tempContainer.firstChild) {
    fragment.appendChild(tempContainer.firstChild);
  }
  
  // Single DOM update
  appContainer.appendChild(fragment);
  
  // Initialize features after DOM is ready
  requestAnimationFrame(() => {
    initAnimations();
    initFormHandling();
  });
}

// Load the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}