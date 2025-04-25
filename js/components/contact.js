export function createContact() {
  return `
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll fade-up">Get In Touch</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-1">
          Have a project in mind? Let's discuss how I can help.
        </p>
        
        <div class="contact-container">
          <div class="contact-info animate-on-scroll fade-up delay-2">
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <p>contact@johndoe.dev</p>
            </div>
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <p>San Francisco, CA</p>
            </div>
            <div class="social-links">
              <a href="#" class="social-link"><i class="fab fa-github"></i></a>
              <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
          
          <form id="contact-form" class="contact-form animate-on-scroll fade-up delay-3">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `;
}