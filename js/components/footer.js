export function createFooter() {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="footer">
      <div class="glow-effect"></div>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo animate-on-scroll fade-up">
            <h2>John Doe</h2>
            <p>Backend Developer</p>
          </div>
          
          <div class="footer-links animate-on-scroll fade-up delay-1">
            <div class="footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div class="footer-social">
              <h3>Connect</h3>
              <ul>
                <li><a href="#"><i class="fab fa-github"></i> GitHub</a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="#"><i class="fab fa-dev"></i> Dev.to</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom animate-on-scroll fade-up delay-2">
          <p>&copy; ${currentYear} John Doe. All rights reserved.</p>
          <p>Made with <span class="heart">♥</span> and clean code</p>
        </div>
      </div>
    </footer>
  `;
}