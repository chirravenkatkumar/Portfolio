export function createHeader() {
  return `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <a href="#" class="logo-link" id="profile-trigger">JD</a>
          </div>
          <div class="menu-toggle" id="menu-toggle">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <ul class="nav-links" id="nav-links">
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#works" class="nav-link">Works</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
            <li><a href="#" class="nav-link highlight">Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="profile-popup" id="profile-popup">
      <div class="profile-content">
        <button class="profile-close" id="profile-close">
          <i class="fas fa-times"></i>
        </button>
        <div class="profile-header">
          <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="John Doe" class="profile-image">
          <div class="profile-info">
            <h2>John Doe</h2>
            <p>28 years old</p>
            <p>San Francisco, CA</p>
          </div>
        </div>
        <div class="profile-details">
          <h3>About Me</h3>
          <p>
            Passionate backend developer with 5+ years of experience building scalable systems and APIs.
            Specialized in Node.js, Python, and distributed systems.
          </p>
          <h3>Education</h3>
          <p>
            B.S. Computer Science<br>
            Stanford University, 2018
          </p>
          <h3>Interests</h3>
          <p>
            System Architecture, Open Source, Cloud Computing, Machine Learning
          </p>
        </div>
      </div>
    </div>
  `;
}

// Initialize header functionality when file is imported
document.addEventListener('DOMContentLoaded', () => {
  // Wait for the elements to be added to the DOM
  setTimeout(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const profileTrigger = document.getElementById('profile-trigger');
    const profilePopup = document.getElementById('profile-popup');
    const profileClose = document.getElementById('profile-close');
    
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });
      
      // Close mobile menu when clicking on links
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.addEventListener('click', () => {
          if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
          }
        });
      });
    }

    // Profile popup functionality
    if (profileTrigger && profilePopup && profileClose) {
      profileTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        profilePopup.classList.add('active');
        document.body.style.overflow = 'hidden';
      });

      profileClose.addEventListener('click', () => {
        profilePopup.classList.remove('active');
        document.body.style.overflow = '';
      });

      profilePopup.addEventListener('click', (e) => {
        if (e.target === profilePopup) {
          profilePopup.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  }, 100);
});