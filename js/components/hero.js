export function createHero() {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title animate-on-scroll fade-up">
            Backend Developer<span class="accent-dot">.</span>
          </h1>
          <h2 class="hero-subtitle animate-on-scroll fade-up delay-1">
            Building robust systems that power modern applications
          </h2>
          <p class="hero-text animate-on-scroll fade-up delay-2">
            I craft scalable and efficient backend solutions using Node.js, Python, and microservices architecture.
          </p>
          <div class="hero-cta animate-on-scroll fade-up delay-3">
            <a href="#contact" class="btn primary-btn">Get in touch</a>
            <a href="#projects" class="btn secondary-btn">View my work</a>
          </div>
        </div>
        <div class="code-snippet animate-on-scroll fade-in delay-4">
          <pre><code>
function Developer() {
  this.name = "John Doe";
  this.role = "Backend Developer";
  this.experience = 5; // years
  this.languages = ["JavaScript", "Python", "Go"];
  
  this.solve = (problem) => {
    return solution;
  }
}
          </code></pre>
        </div>
      </div>
    </section>
  `;
}